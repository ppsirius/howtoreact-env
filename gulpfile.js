'use strict';

const gg = require('gore-gulp');
const gulp = require('gulp');
const eslint = require('space-preconfigured-eslint');

gg(__dirname).setup(gulp);

gulp.task('lint', function () {
  return eslint([
    __filename,
    '/vagrant/web_modules/**/*.js',
  ]);
});
