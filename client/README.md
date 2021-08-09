# [Math with Science](https://www.mathwithscience.com/) / Client
Client side (Back-end) of math with science website.

The client side *(front-end)* is made with [React.js](http://reactjs.org) and connected with the server via RestAPI

## Getting Started
run `prebuild` script to install the dependencies, and compile SCSS files.
```npm
npm run prebuild
```

Or install dependencies with:
```npm
npm install
```

**NOTE**: the front-end components are designed with [SCSS](https://sass-lang.com/), we recomend using a SASS, SCSS compiler for your code editor, or use `compile-scss` script every time to make changes take place in css files.
```npm
npm run compile-scss
```

## [public](https://github.com/rawand-faraidun/mathwithscience/tree/main/client/public) folder
Contains partial designs (`partials.scss`), website images, and fonts *(at the moment it only conytains kurdish font as the english ones are added via google fonts in `partials.scss`)*.

## [src](https://github.com/rawand-faraidun/mathwithscience/tree/main/client/src) folder
Contains all components and datas for the front-end.

## [src/components/DATA](https://github.com/rawand-faraidun/mathwithscience/tree/main/client/src/components/DATA) folder
Contains data for all collections and calculators and their components.

## [gulpfile.js](https://github.com/rawand-faraidun/mathwithscience/blob/main/client/gulpfile.js) file
Contains gulp command(s)
* **compile-scss**: compiles all scss files from client folder to css files expect the ones inside *node_modules* folder.
can be run with `npm run compile-scss` or `gulp scss`