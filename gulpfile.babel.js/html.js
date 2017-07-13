import { paths } from './paths'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import { plumberConfig } from './plumber'
import fileInclude from 'gulp-file-include'
import marked from 'marked'


module.exports = () => gulp.src(paths.index)
  .pipe(plumber(plumberConfig))
  .pipe(fileInclude({
    prefix: '@@',
    basepath: paths.includes,
    filters: {
      markdown: marked
    }
  }))
  .pipe(gulp.dest(paths.build))
