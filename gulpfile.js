var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cachebust    = require('gulp-cache-bust');
var reload       = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dest/css'))
    .pipe(reload({stream: true}))
});

gulp.task('html', function() {
  return gulp.src('./src/**/*.html')
    .pipe(cachebust({type: 'timestamp'}))
    .pipe(gulp.dest('dest'))
    .pipe(reload({stream: true}))
});

gulp.task('assets', function() {
  return gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('dest/assets'))
});

gulp.task('serve', function() {
  browserSync.init({
    server: "./dest",
    notify: false
  });

  gulp.watch('src/**/*.html', gulp.series('html'))
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'))
});

gulp.task('default', gulp.series('html', 'sass', 'assets', 'serve'));
