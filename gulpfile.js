var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('teste', function(){
	console.log("teste de task do GulpJS");
});

gulp.task('stylus', function(){
  gulp.src('src/stylus/**/**.styl')
    .pipe(stylus())
    .pipe(gulp.dest('build/css'))
})