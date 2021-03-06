import { paths } from './paths'
import gulp from 'gulp'
import gulpif from 'gulp-if'
import useref from 'gulp-useref'
import uglify from 'gulp-uglify'
import cssnano from 'gulp-cssnano'
import rev from 'gulp-rev'
import revReplace from 'gulp-rev-replace'
import uncss from 'gulp-uncss'

module.exports = () => gulp.src(`${paths.build}/**/*.html`)
  .pipe(useref({
    searchPath: paths.build
  }))
  // .pipe(gulpif('*.css', uncss({
  //   html: [`${paths.build}/**/*.html`]
  // })))
  .pipe(gulpif('*.js', uglify()))
  .pipe(gulpif('*.js', rev()))
  .pipe(gulpif('*.css', cssnano()))
  .pipe(gulpif('*.css', rev()))
  .pipe(revReplace())
  .pipe(gulp.dest(paths.build))
