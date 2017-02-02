'use strict';

const Stream = require('stream');
const winResourcer = require("winresourcer");
const _ = require("lodash");
const path = require('path');

var mainOptions = {
    operation: "Update", // one of Add, Update, Extract or Delete
    exeFile: "",
    resourceType: "",
    resourceName: "",
    lang: 1033, // Required, except when updating or deleting
    resourceFile: "" // Required, except when deleting
};

function gulpWinresourcer(options) {

    var stream = new Stream.Transform({objectMode: true});

    var resApp = function (filePath, cb) {
        _.extend(mainOptions, options);

        mainOptions.exeFile = filePath;
        mainOptions.resourceFile = path.resolve(mainOptions.resourceFile);

        winResourcer(mainOptions, function (error) {
            cb(error);
        });
    }


    stream._transform = function (file, unused, callback) {
        resApp(file.path, function (error) {
            callback(error, file);
        });
    };

    return stream;
}

module.exports = gulpWinresourcer;
