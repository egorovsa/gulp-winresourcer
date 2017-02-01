# gulp-winresourcer

```javascript
return gulp.src('./app.exe')
            .pipe(winresourcer({
                operation: "Update", // one of Add, Update, Extract or Delete
                resourceType: "Icongroup",
                resourceName: "SOME_RESOURCE",
                lang: 1033, // Required, except when updating or deleting
                resourceFile: "./nw/win-ico.ico" // Required, except when deleting
            }));
```

[Dependence from node-winresourcer](https://github.com/felicienfrancois/node-winresourcer)

### Requirements

##### Windows

- .NET framework 2.0


##### Linux & Mac OS X

- [wine](http://www.winehq.org/) [Use wine guide](https://www.davidbaumgold.com/tutorials/wine-mac/)
- Require .NET framework 2.0 (or equivalent)
- Require a X server (Gnome, KDE, ...). You can also use [Xvfb](http://en.wikipedia.org/wiki/Xvfb)


