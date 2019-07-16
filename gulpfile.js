"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const del = require("del");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const fileinclude = require('gulp-file-include');
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');


// Include partial HTML files
function includePartialFiles() {
  return gulp.src(['pages/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'html_partials'
    }))
    .pipe(gulp.dest('app/pages'));
}

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "app/"
    },
    port: 3000,
    //open: 'external',
    //logConnections: true
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["app/css/", 'app/pages', 'app/js']);
}

// CSS task
function css() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sassGlob())
    .pipe(plumber())
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulp.dest("app/css/"))
    .pipe(browsersync.stream());
}


// JS task
function js(){
  return gulp
    .src(["js/**/*.js"])
    .pipe(plumber())
    .pipe(concat("script.js"))
    .pipe(gulp.dest("app/js/"))
    .pipe(browsersync.stream());
}

// Watch files and start the tasks
function watchFiles() {
  gulp.watch("scss/**/*", gulp.series(css, browserSyncReload));
  gulp.watch("app/js/**/*.js", gulp.series(browserSyncReload));
  gulp.watch("js/**/*.js", gulp.series(js, browserSyncReload));
  gulp.watch(
    [
      "html_partials/**/*",
      "app/*.html",
      "pages/*.html"
    ],
    gulp.series(includePartialFiles, browserSyncReload)
  );
}

// Tasks
gulp.task("scss", css);
gulp.task("js", js);
gulp.task("clean", clean);

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));