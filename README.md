# Uno
...aka Cabestrap. For making internet.

## Getting Started
**Uno** requires
  - [Node.js](https://nodejs.org/en/) < 7.0.0
  - [Yarn](https://yarnpkg.com/en/)

Once you've cloned or downloaded the source, you simply need to run `yarn`. Running `yarn start` will start a local development server at `localhost:1337`. Your default browser should open automatically. That's it. That's really it. Get to work.

Uno comes with a few built-in scripts out of the box. These are designed to streamline common workflows.

| Taskname       | Description     |
| :------------- | :-------------  |
|`yarn start`    | Begins a local dev server. This is basically watching your code for changes, which will trigger the various 'gulp' scripts to run and automatically reload your browser window when it's finished.
|`yarn test`     | This will run a javascript linter (we prefer [Standard](http://standardjs.com/)), but it's not necessary to follow our style. Write your javascript however you want.
|`yarn imgmin`   | This task will compress your `jpg`,`png`,`gif`, and `svg` files. It will squish a lot of bits out of your images, and this can have unintended consequences. It's left out of the main build scripts for a reason: use it wisely, and back up your stuff.
|`yarn build`    | Before you hit the tubes, run `build`. This'll minify your javascript and CSS and get everything tidy for production. All you need to do is throw your "build" folder up on the server and clock out. If you're using something like [Deploybot](https://deploybot.com), run this script on the server every time you push to production.

## Anything else?

Oh hell yeah. <a href="http://uno.cinco.io" target="blank">See the full documentation.</a>
