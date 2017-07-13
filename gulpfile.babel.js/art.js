import fs from 'fs'
const npm = JSON.parse(fs.readFileSync('./package.json'))

export const art = {

  splash: `
      x8h.     x8.
    :88888> .x8888x.   u.    u.          u.
     '8888   '8888f  x@88k u@88c.  ...ue888b
      8888    8888' ^"8888""8888"  888R  Y888r
      8888    8888    8888  888R   888R  I888>
      8888    8888    8888  888R   888R  I888>
      8888    8888    8888  888R   888R  I888>
      8888    8888    8888  888R   u888  J888
    -n88888x>"88888x "*88*" 8888"   "*888*P"
      '%888"  4888!'   ""   'Y"       'Y"
        '"      ""

    ${npm.name} v${npm.version}
    ${npm.description}.
    By ${npm.author}
  `,
  build: `
    😎  Build complete.
    Your static assets are in the 'build' directory.
  `
}
