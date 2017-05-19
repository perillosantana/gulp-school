var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');
var path = require('path');

gulp.task('teste', function(){
	console.log("teste de task do GulpJS");

	console.log(path);
});

gulp.task('less', function () {
	gulp.src('less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('less');
  gulp.watch('teste');
});

gulp.task('default', ['watch']);