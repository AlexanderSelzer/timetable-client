var gulp = require("gulp")

var less = require("gulp-less")
var minifyCss = require("gulp-minify-css")
var autoprefixer = require("gulp-autoprefixer")
var sourcemaps = require("gulp-sourcemaps")

var uglify = require("gulp-uglify")
var browserify = require('browserify')
var reactify = require('reactify')
var transform = require("vinyl-transform")

var paths = {
  js: ["src/js/**/*.js"],
  less: ["src/css/*.less"]
}

gulp.task("js", function() {
  var browserified = transform(function(filename) {
    return browserify(filename, {basename: __dirname}).transform(reactify).bundle()
  });

  gulp.src(paths.js)
    .pipe(browserified)
    .pipe(uglify())
    .pipe(gulp.dest("js/"))
})

/*
gulp.task("js", function() {
  gulp.src(paths.js)
    .pipe(react())
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest("js/"))
})
*/

gulp.task("less", function() {
  gulp.src(paths.less)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write("./"))
    //.pipe(minifyCss())
    .pipe(gulp.dest("css/"))
})

gulp.task("watch", function() {
  gulp.watch(paths.js, ["js"])
  gulp.watch(paths.less, ["less"])
})

gulp.task("default", ["watch", "js", "less"])
