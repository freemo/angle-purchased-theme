/// <binding BeforeBuild='default' Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    rtlcss = require("gulp-rtlcss");

var paths = {
    webroot: "./wwwroot/"
};

// Sources
paths.js = [
    paths.webroot + 'master/js/app.init.js',
    paths.webroot + 'master/js/modules/**/*.js',
    paths.webroot + 'master/js/custom/**/*.js'
];
//paths.minJs = paths.webroot + "master/js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
//paths.minCss = paths.webroot + "css/**/*.min.css";
paths.sass = paths.webroot + "master/sass/app.scss";
paths.sassThemes = paths.webroot + "master/sass/themes/*.scss";
paths.sassBs = paths.webroot + "master/sass/bootstrap.scss";
paths.sassWatch = paths.webroot + "master/sass/**/*.scss";
// Dests
paths.concatJsDest = paths.webroot + "js";
paths.concatCssDest = paths.webroot + "css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src(paths.js)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.concatJsDest));
});

gulp.task('sass:app', function () {
    gulp.src(paths.sass)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task('sass:bs', function () {
    gulp.src(paths.sassBs)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task('sass:themes', function () {
    gulp.src(paths.sassThemes)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task('sass:watch', function () {
    gulp.watch(paths.sassWatch, ['sass']);
});

gulp.task('sass', ['sass:bs', 'sass:app', 'sass:themes']);

gulp.task('rtl', function () {
    gulp.src(paths.css)
        .pipe(rtlcss())
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task("min:css", ['sass'], function () {
    gulp.src(paths.css)
        .pipe(cssmin())
        .pipe(gulp.dest(paths.concatCssDest));
});

gulp.task("min", ['min:css', 'min:js']);

gulp.task("default", ["min:js", "sass"]);
