var gulp = require('gulp');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');

gulp.task('teste', function(){
	console.log("teste de task do GulpJS");
});

gulp.task('stylus', function(){
  gulp.src('src/stylus/**/**.styl')
    .pipe(stylus())
    .pipe(gulp.dest('build/css'))
});

// Rerun the task when a file changes
// gulp.task('watch', function() {
//   gulp.watch(paths.stylus, ['stylus']);
//   gulp.watch(paths.teste, ['teste']);
// });

gulp.task('default', ['teste', 'stylus']);