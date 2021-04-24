"use strict";

// let gulp = require('gulp');
// let jshint = require('gulp-jshint');

// gulp.task('default',['jshint','test','serve']);

// gulp.task('jshint', ()=>{
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

const { src, task, series, parallel } = require('gulp');
const jshint = require('gulp-jshint');

task('test',()=>{
	require('./test.js');
})
task('serve',()=>{
	require('./main.js');
});

task('default', series(
	parallel('test', 'serve',
		()=>{
			return src('./*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
		}
	)
));