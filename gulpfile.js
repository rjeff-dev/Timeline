const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// compila SCSS -> CSS
function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

// otimiza imagens
function images(){
    return gulp.src('./images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// copia HTML para dist
function html(){
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

exports.default = gulp.parallel(styles, images, html);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./index.html', gulp.parallel(html));
}
