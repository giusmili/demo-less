var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
 
//task for minify-css

gulp.task('minify-css', function () {
    gulp.src('./css/style.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('./css-minify'));
});