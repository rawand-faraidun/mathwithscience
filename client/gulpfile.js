var gulp = require('gulp')
var sass = require('gulp-sass')(require('node-sass'))
var autoprefixer = require('autoprefixer')
var postcss = require('gulp-postcss')



// scss src and compiling path
var paths = {
    styles: {
        src: './!(node_modules)/**/*.scss',
        dest: './'
    }
}


/**
 * compiling scss
 */
function scss() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest))
}

exports.scss = scss




/**
 * watching scss
 */
// function watch() {
    
//     gulp.watch(paths.styles.src, scss)
    
//     scss()
// }

// exports.watch = watch