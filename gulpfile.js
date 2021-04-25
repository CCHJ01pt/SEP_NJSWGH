"use strict";

let gulp = require('gulp');
let jshint = require('gulp-jshint');

gulp.task('jshint',(done)=>{
	return gulp.src('./*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));

		done();
});
gulp.task('test',(done)=>{
	require('./test.js');

	done();
});
gulp.task('serve',(done)=>{
	require('./main.js');

	done();
});
gulp.task('default', gulp.series(
	'jshint','test','serve'));