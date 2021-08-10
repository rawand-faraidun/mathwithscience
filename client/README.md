# [Math with Science](https://www.mathwithscience.com/) - Client
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

**NOTE**: the front-end components are designed with [SCSS](https://sass-lang.com/), using a SASS, SCSS compiler for your code editor is recomended, or use `compile-scss` script after every changes to save them into CSS files.
```npm
npm run compile-scss
```

## [public](https://github.com/rawand-faraidun/mathwithscience/tree/main/client/public) folder
Contains partial designs (`partials.scss`), website images, and fonts *(at the moment it only contains kurdish font as the english ones are added via google fonts in `partials.scss`)*.

## [src](https://github.com/rawand-faraidun/mathwithscience/tree/main/client/src) folder
Contains all components and datas for the front-end.

### [src/components/DATA](https://github.com/rawand-faraidun/mathwithscience/tree/main/client/src/components/DATA) folder
Contains data for all collections and calculators and their components.

* [`Calculators-Data.js`](https://github.com/rawand-faraidun/mathwithscience/blob/main/client/src/components/DATA/Calculators-Data.js),
[`Collections-Data.js`](https://github.com/rawand-faraidun/mathwithscience/blob/main/client/src/components/DATA/Collections-Data.js) 
files are Database-like files, they contains datas for collections and calculators.  

* [`Calculators.js`](https://github.com/rawand-faraidun/mathwithscience/blob/main/client/src/components/DATA/Calculators.js),
[`Collections.js`](https://github.com/rawand-faraidun/mathwithscience/blob/main/client/src/components/DATA/Collections.js)
are providing the datas with `find`, `findOne`, and `findIn` function that are taking conditions Object.  

* [calculators-components](https://github.com/rawand-faraidun/mathwithscience/tree/main/client/src/components/DATA/calculators-components) folder
contains all calculators components

## [gulpfile.js](https://github.com/rawand-faraidun/mathwithscience/blob/main/client/gulpfile.js) file
Contains gulp script(s)
* **compile-scss**: compiles all scss files from client folder to css files expect the ones inside *node_modules* folder.
can be run with `npm run compile-scss` or `gulp scss`