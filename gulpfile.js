var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');

gulp.task('default', function() {
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['env'],
            plugins: ["transform-regenerator"]
        }))
//        .pipe(uglify())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('./'));
});