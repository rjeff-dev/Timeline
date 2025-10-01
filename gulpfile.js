const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Compilar SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Otimizar imagens
function images() {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Copiar HTML
function html() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

exports.default = gulp.parallel(styles, images, html);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/images/*', gulp.parallel(images));
    gulp.watch('./index.html', gulp.parallel(html));
}
