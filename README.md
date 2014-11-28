MRZ Boilerplate
====================

[![forthebadge](http://forthebadge.com/badges/uses-html.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/badges/uses-css.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/badges/uses-badges.svg)](http://forthebadge.com)

Minimal CSS(SCSS) starter kit with pre-configured Grunt.js tasks for better performance and optimalization.

 1. SCSS
 2. BEM naming convention
 3. Base styles for typography, buttons, inputs and tables
 4. Flexbox Grid - based on [flexboxgrid.com](http://flexboxgrid.com)
 5. Vertical Rythm
 6. Easy to work with, great base for something awesome!
 7. [NOT A UI KIT!](https://twitter.com/brad_frost/status/516603995075653632)
 8. Grunt.js tasks:
  * sass - SASS files compilation
  * autoprefixer - vendor prefixes
  * uncss - remove unused CSS
  * cssmin - minify CSS files
  * watch - watch for files changes + livereload

###Install dependencies
Don't forget to install required dependencies via npm and bower. To do this run:

```sh
npm install
```

and this:

```sh
bower install
```

You need have Node.js and Bower installed already.

###Run tasks
To run tasks (you need have installed Grunt) run:

```sh
grunt dev
```

for production tasks run:

```sh
grunt prod
```

Notice that prod task hasn't watch task included.

###Demo

Demo is available at: http://demo.michal.zalecki.pl/mrz-boilerplate