import { paths } from './paths'
import gulp from 'gulp'

module.exports = () => gulp.src(
  [
    `${paths.source}/**/*.{ttf,woff,woff2,eof,svg,ico,png,jpg,gif,pdf}`,
    `${paths.source}/**/.htaccess`,
  ])
  .pipe(gulp.dest(paths.build))
