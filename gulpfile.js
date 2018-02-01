const gulp = require('gulp');

gulp.task('css', function() {
    gulp.src('build/static/css/*.css')
        .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
    gulp.src('build/static/js/*.js')
        .pipe(gulp.dest('./js'));
});

gulp.task('ico', function() {
    gulp.src('build/favicon.ico')
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['css', 'js', 'ico']);

