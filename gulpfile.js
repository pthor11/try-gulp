var gulp = require('gulp');
var del = require('del');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function () {
    return del('dist')
})

gulp.task('build', function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('dist'))
})

gulp.task('copy', function () {
    return gulp.src('src/*.test')
        .pipe(gulp.dest('dist'))
})

gulp.task('default', gulp.series('clean', 'build', 'copy'))

gulp.task('watch', function () {
    return watch('src/**/*.ts', gulp.series('clean', 'build', 'copy'))
})