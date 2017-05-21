var gulp = require('gulp');
var watch = require('gulp-watch');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');


// LESS
var less = require('gulp-less');
gulp.task('less', function () {
	return gulp.src('less/*.less')
	.pipe(plumber(function(e) {
		console.log(e);
	}))
	.pipe(less())
	// .pipe(watch('less/*.less'))
	// .pipe(gulp.dest('css'))
	// .pipe(notify('LESS Compilado: <%= file.relative %>'));
});

gulp.task('default', ['less']);