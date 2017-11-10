'use strict';

const gulp = require('gulp');
const istanbul = require('gulp-istanbul');

gulp.task('coverage', function() {
  return gulp.src(['src/**/*.js'])
    .pipe(istanbul({
      coverageVariable: '__coverage__'
    }))
    .pipe(gulp.dest('./test/src'));
});