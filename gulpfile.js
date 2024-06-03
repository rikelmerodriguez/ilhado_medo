const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function videos() {
    return gulp.src('./src/videos/**/*')
        .pipe(gulp.dest('./dist/videos'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(styles, images, videos, scripts);
exports.watch = function () {
    gulp.watch('src/styles/*.scss', {ignoreInitial: false}, styles);
    gulp.watch('src/images/**/*.jpg', {ignoreInitial: false}, images);
    gulp.watch('src/videos/**/*.mp4', { ignoreInitial: false }, videos);
    gulp.watch('src/scripts/*.js', { ignoreInitial: false }, scripts);
}