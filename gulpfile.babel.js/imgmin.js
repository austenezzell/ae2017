import { paths } from './paths'
import gulp from 'gulp'
import imgmin from 'gulp-imagemin'

module.exports = () => gulp.src(`${paths.images}.{jpg,png,gif,svg}`)
  .pipe(imgmin())
  .pipe(
    gulp.dest(`${paths.source}/assets/images`, {
      overwrite: true
    })
  )
