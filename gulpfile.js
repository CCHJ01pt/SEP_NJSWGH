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

let gulp = require('gulp');
let jshint = require('gulp-jshint');

gulp.task('test',()=>{
	require('./test.js');
});
gulp.task('serve',()=>{
	require('./main.js');
});

gulp.task('default', gulp.series(
	gulp.parallel('test', 'serve',
		()=>{
			return gulp.src('./*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('default'))
			.pipe(print(function() { return 'Done'; }));
		}
	)
));