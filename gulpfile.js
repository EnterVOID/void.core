var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');

var paths = {
  vendor: [
    'bower_components/angular/angular.js',
    'bower_components/moment/moment.js',
    'bower_components/moment-timezone/moment-timezone.js',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/ev-emitter/ev-emitter.js',
    'bower_components/imagesloaded/imagesloaded.pkgd.js',
    'bower_components/angular-images-loaded/angular-images-loaded.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/ng-file-upload/ng-file-upload-all.js',
  ],
  javascript: [
    'resources/ng/**/*.js'
  ],
  templates: [
    'resources/ng/**/*.html'
  ],
  style: [
    'resources/scss/application.scss'
  ],
  allStyles: [
    'resources/scss/**/*.scss'
  ]
};

gulp.task('styles', function() {
  gulp.src(paths.style)
    .pipe(compass({
      css:   './public/css',
      sass:  './resources/scss',
      image: './public/images'
    }))
    .pipe(rename('void.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(rename('void.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'));
});

gulp.task('bower-files', function(cb) {
  pump([
    gulp.src(mainBowerFiles('**/*.js'), { base: 'bower_components' }),
      uglify(),
      concat('vendor.js'),
      gulp.dest('./public/js/')
    ],
    cb
  );
});

gulp.task('vendor', function() {
  gulp.src(paths.vendor)
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('templates', function () {
  gulp.src(paths.templates)
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('scripts', function() {
  gulp.src(paths.javascript)
    .pipe(uglify())
    .pipe(concat('void.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.allStyles, ['styles']);
	gulp.watch(paths.javascript, ['scripts']);
});

gulp.task('default', ['styles', 'bower-files', 'vendor', 'templates'], function(){});
