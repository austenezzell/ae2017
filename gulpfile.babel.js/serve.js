import { paths } from './paths'
import browserSync from 'browser-sync'

module.exports = () => browserSync({
  server: {
    baseDir: paths.build
  },
  port: 1337,
  notify: false,
  ghostMode: false,
  ui: false
})
