## Tasks
---
Uno comes with a few built-in scripts out of the box. These are designed to streamline common workflows.

| Taskname       | Description     |
| :------------- | :-------------  |
|`yarn start`    | Begins a local dev server. This is basically watching your code for changes, which will trigger the various 'gulp' scripts to run and automatically reload your browser window when it's finished.
|`yarn test`     | This will run a javascript linter (we prefer [Standard](http://standardjs.com/)), but it's not necessary to follow our style. Write you javascript however you damn well please.
|`yarn imgmin`   | This task will compress your `jpg`,`png`,`gif`, and `svg` files. It will squish a lot of bits out of your images, and this can have unintended consequences. It's left out of the main build scripts for a reason: use it wisely, and back up your stuff.
|`yarn build`    | Before you hit the tubes, run `build`. This'll minify your javascript and CSS and get everything tidy for production. All you need to do is throw your "build" folder up on the server and clock out. If you're using something like [Deploybot](https://deploybot.com), run this script on the server every time you push to production.

### On Gulp
These scripts are just the tip of the iceberg. You can edit and extend these scripts yourself. We use [Gulp](http://gulpjs.com) for its simplicity and community support.

The `gulpfile.babel.js` directory houses all the tasks, which are imported and referenced in that directory's `index.js` file. If you need to run any individual task, you'll need to install `gulp` globally via `npm install -g gulp`. Now you can run individual tasks like `gulp styles` or `gulp copyfiles` for debugging.
