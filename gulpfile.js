"use strict";

// let gulp = require('gulp');
// let jshint = require('gulp-jshint');

// gulp.task('default',['jshint','test','serve']);

// gulp.task('jshint',()=>{
// 	return gulp.src('./*.js')
// 		.pipe(jshint())
// 		.pipe(jshint.reporter('default'));
// })
// .task('test',()=>{
// 	require('./test.js');
// })
// .task('serve',()=>{
// 	require('./main.js');
// });

let {src, task, series} = require('gulp');
let jshint = require('gulp-jshint');

task('test',(done)=>{
	require('./test.js');

	done();
});
task('serve',(done) => {
	require('./main.js');

	done();
});
task('default', series(
		(done) => {
			return src(['./*.js'])
			.pipe(jshint())
			.pipe(jshint.reporter('default'));

			done();
		}
		,'serve','test'
));