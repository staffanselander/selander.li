var prefix      = require('gulp-autoprefixer');
var typescript  = require('gulp-typescript');
var livereload  = require('gulp-livereload');
var sassLint    = require('gulp-sass-lint');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var gulp        = require('gulp');
var del         = require('del');

var typescriptProject = typescript.createProject('./tsconfig.json');

/**
 * Wrap all our sass pipes
 * for same functionality
 */
var compileSass = function(source, filename) {
	gulp.src(source)
	  .pipe(sass().on('error', sass.logError))
	  .pipe(concat(filename))
	  .pipe(prefix())
	  .pipe(gulp.dest('./public/css/'))
	  .pipe(livereload());
};

/**
 * Wrap all our javascript pipes
 * for same functionality
 */
var compileJavascript = function(source, filename) {
	gulp.src(source)
	  .pipe(concat(filename))
	  .pipe(gulp.dest('./public/js/'))
	  .pipe(livereload());
};

/**
 * Default task
 */
gulp.task('default', [
	'css',
	'javascriptDependencies',
	'javascriptApplication',
], function(){

});

/**
 * Javascript Dependencies task
 */
gulp.task('javascriptDependencies', function() {
	compileJavascript([
			'./node_modules/angular/angular.js',
			'./node_modules/angular-route/angular-route.js',
			'./node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-strap/dist/angular-strap.js',
            './node_modules/angular-scroll-animate/dist/angular-scroll-animate.js',
            './node_modules/angular-scroll/angular-scroll.js',
            './node_modules/angular-count-to/src/count-to.js',
            './node_modules/angular-parallax/scripts/angular-parallax.js'
		],
		'dependencies.min.js'
	);
});

/**
 * Typescript Task
 */
gulp.task('typescriptApplication', function() {
    var typescriptResult = typescriptProject.src()
                            .pipe(typescript(typescriptProject));

    return typescriptResult.js.pipe(gulp.dest('./'));
});

/**
 * Javascript Application task
 */
gulp.task('javascriptApplication', ['typescriptApplication'], function() {
	compileJavascript([
			'./app/app.module.js',
			'./app/**/*.js',
			'./resources/assets/js/**/*.js'
		],
		'main.min.js'
	);
});

gulp.task('clean:javascript', function() {
    del(['app/**/*.js']); 
});

/**
 * Css entire sheet task
 */
gulp.task('css', function() {
	compileSass([
		// './node_modules/animate.scss/vendor/assets/stylesheets/animate.scss',
		'./resources/assets/scss/app.scss'
	],
	'main.min.css');
});

/**
 * Watch files and gulp em task
 */
gulp.task('watch', function(){
	livereload.listen();

	gulp.watch('./resources/assets/scss/**/*.scss', [
		'css'
	]);

	gulp.watch('./resources/**/*.js', [
		'javascriptApplication'
	]);

	gulp.watch('./app/**/*.ts', [
		'javascriptApplication'
	]);

	gulp.watch('./**/*.html').on('change', function(file) {
        livereload.changed(file.path);
    });
});
