'use strict'
const { watch, series, src, dest, parallel } = require('gulp')
const postcss = require('gulp-postcss')
const less = require('gulp-less')
const cssmin = require('gulp-cssmin')
const pxtounits = require('postcss-px2units')
const presetenv = require('postcss-preset-env')
// const rename = require('gulp-rename')
const tobem = require('postcss-bem-fix')

const bemConfig = {
  shortcuts: {
    component: 'b',
    modifier: 'm',
    descendent: 'e'
  },
  separators: {
    descendent: '__',
    modifier: '--'
  }
}

function compileCssToPx (done) {
  return src('./src/**/*.less')
    .pipe(less())
    .pipe(
      postcss([
        tobem(bemConfig),
        presetenv(),
        pxtounits({
          divisor: 2,
          targetUnits: 'px'
        })
      ])
    )
    .pipe(cssmin())
    // .pipe(rename({ suffix: '.px' }))
    .pipe(dest('./lib'))
}

function copyFont (done) {
  return src('./src/fonts/**').pipe(dest('./lib/fonts'))
}

function watchCss (done) {
  return watch('./src/**/*.less', parallel(compileCssToPx))
}

function watchFonts (done) {
  return watch('./src/fonts/**', copyFont)
}

exports.build = parallel(compileCssToPx, copyFont)
exports.default = series(
  compileCssToPx,
  copyFont,
  parallel(watchCss, watchFonts)
)
