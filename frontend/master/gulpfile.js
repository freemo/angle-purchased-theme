var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    path = require('path'),
    marked = require('marked'), // For :markdown filter in jade
    path = require('path'),
    gulpsync = $.sync(gulp),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    PluginError = $.util.PluginError;

// production mode (see build task)
var isProduction = false;
var useSourceMaps = false;

// ignore everything that begins with underscore
var hidden_files = '**/_*.*';
var ignored_files = '!' + hidden_files;

// VENDOR CONFIG
var vendor = {
    site: {
        source: require('./vendor.json'),
        dest: '../site/vendor'
    }
};

// SOURCES CONFIG
var source = {
    scripts: {
        site: ['js/script.js',
            'js/modules/**/*.js',
            'js/custom/**/*.js',
            ignored_files
        ],
        watch: ['js/*.js', 'js/**/*.js']
    },
    templates: {
        pages: {
            files: ['jade/*.jade', ignored_files],
            watch: ['jade/**/*.jade', 'jade/*.jade', 'jade/' + hidden_files]
        }
    },
    styles: {
        site: {
            main: ['less/styles.less', '!less/themes/*.less'],
            dir: 'less',
            watch: ['less/*.less', 'less/**/*.less', '!less/themes/*.less']
        },
        themes: {
            main: ['less/themes/*.less', ignored_files],
            dir: 'less/themes',
            watch: ['less/themes/*.less']
        },
    },
    bootstrap: {
        main: 'less/bootstrap/bootstrap.less',
        dir: 'less/bootstrap',
        watch: ['less/bootstrap/*.less']
    }
};

// BUILD TARGET CONFIG
var build = {
    scripts: {
        site: {
            main: 'scripts.js',
            dir: '../site/js'
        },
        vendor: {
            main: 'vendor.js',
            dir: '../vendor/js'
        }
    },
    styles: '../site/css/',
    templates: {
        pages: '../site'
    }
};



//---------------
// TASKS
//---------------


// JS SITE
gulp.task('scripts:site', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    return gulp.src(source.scripts.site)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe($.concat(build.scripts.site.main))
        .on("error", handleError)
        .pipe($.if(isProduction, $.uglify({
            preserveComments: 'some'
        })))
        .on("error", handleError)
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe(gulp.dest(build.scripts.site.dir))
        .pipe(reload({
            stream: true
        }));
});


// VENDOR BUILD

// copy file from bower folder into the site vendor folder
gulp.task('scripts:vendor', function() {

    var jsFilter = $.filter('**/*.js', { restore: true });
    var cssFilter = $.filter('**/*.css', { restore: true });

    return gulp.src(vendor.site.source, {
            base: 'bower_components'
        })
        .pipe($.expectFile(vendor.site.source))
        .pipe(jsFilter)
        .pipe($.uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe($.cssnano())
        .pipe(cssFilter.restore)
        .pipe(gulp.dest(vendor.site.dest))
        .pipe(reload({
            stream: true
        }));

});

// SITE LESS
gulp.task('styles:site', function() {
    return gulp.src(source.styles.site.main)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe($.less({
            paths: [source.styles.site.dir]
        }))
        .on("error", handleError)
        .pipe($.if(isProduction, $.cssnano()))
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe(gulp.dest(build.styles))
        .pipe(reload({
            stream: true
        }));
});

// SITE RTL
gulp.task('styles:site:rtl', function() {
    return gulp.src(source.styles.site.main)
        .pipe($.if(useSourceMaps, $.sourcemaps.init()))
        .pipe($.less({
            paths: [source.styles.site.dir]
        }))
        .on("error", handleError)
        .pipe($.rtlcss())
        .pipe($.if(isProduction, $.cssnano()))
        .pipe($.if(useSourceMaps, $.sourcemaps.write()))
        .pipe($.rename(function(path) {
            path.basename += "-rtl";
            return path;
        }))
        .pipe(gulp.dest(build.styles))
        .pipe(reload({
            stream: true
        }));
});

// LESS THEMES
gulp.task('styles:themes', function() {
    return gulp.src(source.styles.themes.main)
        .pipe($.less({
            paths: [source.styles.themes.dir]
        }))
        .on("error", handleError)
        .pipe(gulp.dest(build.styles))
        .pipe(reload({
            stream: true
        }));
});

// BOOSTRAP
gulp.task('bootstrap', function() {
    return gulp.src(source.bootstrap.main)
        .pipe($.less({
            paths: [source.bootstrap.dir]
        }))
        .on("error", handleError)
        .pipe(gulp.dest(build.styles))
        .pipe(reload({
            stream: true
        }));
});


// JADE
gulp.task('templates:pages', function() {
    return gulp.src(source.templates.pages.files)
        // .pipe($.changed(build.templates.pages, { extension: '.html' }))
        .pipe($.jade())
        .on("error", handleError)
        .pipe($.htmlPrettify({
            indent_char: ' ',
            indent_size: 3,
            unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
        }))
        .pipe(gulp.dest(build.templates.pages))
        .pipe(reload({
            stream: true
        }));
});


//---------------
// WATCH
//---------------

// Rerun the task when a file changes
gulp.task('watch', function() {

    gulp.watch(source.scripts.watch, ['scripts:site']);
    gulp.watch(source.styles.site.watch, ['styles:site', 'styles:site:rtl']);
    gulp.watch(source.styles.themes.watch, ['styles:themes']);
    gulp.watch(source.bootstrap.watch, ['styles:site']); //bootstrap
    gulp.watch(source.templates.pages.watch, ['templates:pages']);

});

// Serve files with auto reaload
gulp.task('browsersync', function() {
    console.log('Starting BrowserSync..');

    browserSync({
        notify: false,
        server: {
            baseDir: '../site'
        }
    });

});

//---------------
// DEFAULT TASK
//---------------

// build for production (minify)
gulp.task('build', ['prod', 'default']);
gulp.task('prod', function() {
    isProduction = true;
});

// Server for development
gulp.task('serve', gulpsync.sync([
    'default',
    'browsersync'
]), done);

// Server for production
gulp.task('serve-prod', gulpsync.sync([
    'build',
    'browsersync'
]), done);

// build with sourcemaps (no minify)
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function() {
    useSourceMaps = true;
});

// default (no minify)
gulp.task('start', [
    'styles:site',
    'styles:site:rtl',
    'styles:themes',
    'templates:pages',
    'watch'
]);

gulp.task('default', gulpsync.sync([
    'scripts:vendor',
    'scripts:site',
    'start'
]));

gulp.task('done', function() {
    console.log('All Done!! You can start editing your code, BrowserSync will update your browser after any change..');
});


///////


function done() {
    $.util.log($.util.colors.cyan('************'));
    $.util.log($.util.colors.cyan('* All Done *'), 'You can start editing your code, BrowserSync will update your browser after any change..');
    $.util.log($.util.colors.cyan('************'));
}

// Error handler
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}