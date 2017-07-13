## What's in the box
---
There are _a lot_ of front-end tools in here. `gulp` and its numerous plug-ins, `browserify` with `babel` that transpiles ES6 into code your browser can read, everyone's bff `sass` and a sprinkle of `postcss`. I'd be happy to explain how this all works over coffee, but for brevity's sake I'm gonna just hit the stuff that's going to get you rolling.

---
### Markup (HTML5 / Markdown)
The main HTML file is `src/html/index.html`.

There's really lightweight templating built in utilizing [gulp-file-include](https://www.npmjs.com/package/gulp-file-include). By default it looks in the `src/html/_includes` directory. You can include any type file and it will spit out its contents:

Example: `@@include('path/file.html')` or `@@include('path/logo.svg')`

This handy plugin will also parse markdown files to HTML:

`@@include(markdown('path/file.md'))`.

gulp-file-include has a bunch of great features, like `@@for` loops, and `@@if` conditionals, plus it even lets you loop over `JSON` data for advanced templating. It's best to [read up on what it can do](https://www.npmjs.com/package/gulp-file-include).

---
### Styles ([Sass](http://sass-lang.com/))
The main CSS file is `src/scss/main.scss`.

CSS files get compiled from Sass. There are two sections in the `src/scss` directory, `uno`, which contains all of Uno's tools and OOCSS classes, and `app`, which includes your site's components, pages, and sections CSS. Uno is separated from the main css files so that it remains immutable and independent. It is not your application's code, and is actually completely optional.

### App
Your site's CSS (`src/scss/app/`) contains a `_variables.scss` file where you define site-wide globals.This lone file should be filled with variables that your entire site uses, things like colors, fonts, or transition timing. I also find it useful to define `@keyframes` in here so they're available all throughout the app. While there are many philosophies on CSS organization, we prefer to break stuff up into 5 sections: 'lib', 'core', 'components', 'sections' and 'pages'.

- #### Lib
Lib contains some dependencies your app needs like mixins and functions. It's also where the `:root` is defined. It's a good idea to put anything here that might break if it goes missing.

- #### Core
Core contains your base application selectors, naked stuff like `body`, `p`, or `a` tags. Essentials are defined in here. The `colors` file contains an array you can dump color values into to generate OOCSS color classes for text and backgrounds.

- #### Components
This is the meat of your app. Things like alerts, buttons, forms, headers, blockquote, you know. Any piece that is going to be very common and reusable.

- #### Sections
This folder contains page sections. These might be global, like the header or footer, or appear on one or two pages, like a contact form. These typically make liberal use of components.

- #### Pages
And finally, page specific CSS gets thrown into here.

### Based Framework
Uno comes with the [Based.css](https://github.com/bitmap/based.css) framework to jump start your site.

You can [read the full documentation](http://cabe.io/based.css).

Uno is extending Based a little bit. By default it imports the source and exposes some variables to configure, like grid sizing or spacing. These can be tweaked in your app's `variables.scss` file.

Of course, you're not forced to use this framework. You can straight up delete it and reassign the variable names if you want to start super fresh. Uno's `app.scss` file will resolve paths from `node_modules`, so feel free to remove the dependency and use Bootstrap or Foundation or whatever you like.

### Mixin Library
Uno comes with a few cool [mixins](#uno-mixins). You're welcome to extend them our pull in your favorite mixin library, like Bourban.

### Postcss
Your compiled Sass takes a quick trip through [postcss](https://github.com/postcss/postcss) to make your life a little easier. We run [autoprefixer](https://www.npmjs.com/package/autoprefixer) so you can forgo writing vendor prefixes, [pixrem](https://www.npmjs.com/package/pixrem) to convert `rem` units to `px`, and [mqpacker](https://www.npmjs.com/package/css-mqpacker) to organize your media queries so you don't have to worry about duplicate queries causing cascading issues.

And finally, when you run the `npm run build` script, [uncss](https://www.npmjs.com/package/uncss) will parse all of your HTML files and remove any unused CSS selectors. Your app can get quite beefy, and this significantly cuts down on CSS bloat.

---
### Scripts ([Babel](http://babeljs.com/))
The main JS file is `src/js/main.js`.

You've got a lot of options here. Write ES6 and watch it just work in your browser, write your JS like it's 1999, or just import jQuery and sip your tea.

But, we've built in [Babel](http://babeljs.com/). ES6 JavaScript gets compiled in browser-readable core (thanks [Browserify](http://browserify.org/)). This also allows you to install scripts and libraries from `npm` instead of manually managing them yourself.

- Install modules from npm in the command line: `npm install jquery --save`. This install the script as a dependency.
- Import these dependencies at the top of your JS files: `import $ from 'jquery'`
- PLUS, you can import your own scripts: `import component from './path/to/file'`

We set up a super basic example. [Read up on ES6 syntax and features](https://babeljs.io/learn-es2015/) if you haven't.

### I don't like things the way they are...
Hell, neither do I, but this is a good start. You can easily add more advanced templating like Jade or Mustache, replace Based.css with Bootstrap, wire it up to use CoffeeScript if that's your thing, or just pull in literally any JavaScript library.
