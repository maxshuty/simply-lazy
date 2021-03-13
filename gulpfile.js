function defaultTask(cb) {
  cb();
}

exports.default = defaultTask;

const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('js-minify', function () {
  return gulp
    .src(['./src/simplyLazy.js'])
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(uglify())
    .pipe(
      rename(function (path) {
        path.extname = '.min.js';
      })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./docs'));
});
