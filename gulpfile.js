const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('css', function () {
    return gulp.src([
        './static/css/bootstrap.min.css',
        './static/css/font-awesome.min.css',
        './static/css/animate.min.css',
        './static/css/ionicons.min.css',
        './static/css/owl.carousel.min.css',
        './static/css/lightbox.min.css',
        './static/css/style.css'
    ])
        .pipe(concat('all.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scripts', function () {
    return gulp.src([
        "./static/js/jquery.min.js",
        "./static/js/jquery-migrate.min.js",
        "./static/js/bootstrap.bundle.min.js",
        "./static/js/easing.min.js",
        "./static/js/hoverintent.js",
        "./static/js/superfish.min.js",
        "./static/js/wow.min.js",
        "./static/js/waypoints.min.js",
        "./static/js/counterup.min.js",
        "./static/js/owl.carousel.min.js",
        "./static/js/isotope.pkgd.min.js",
        "./static/js/lightbox.min.js",
        "./static/js/jquery.touchswipe.min.js",
        "./static/js/contactform.js",
        "./static/js/main.js"
    ])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', gulp.series('css', 'scripts'));
