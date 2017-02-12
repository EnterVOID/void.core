var gulp = require('gulp');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var bytediff = require('gulp-bytediff');

var paths = {
  vendor: [
    'bower_components/angular/angular.js',
    'bower_components/moment/moment.js',
    'bower_components/moment-timezone/moment-timezone.js',
    'bower_components/angular-moment/angular-moment.js',
    'bower_components/jquery/dist/jquery.js',
    'bower_components/ev-emitter/ev-emitter.js',
    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    'bower_components/imagesloaded/imagesloaded.pkgd.js',
    'bower_components/angular-images-loaded/angular-images-loaded.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-resource/angular-resource.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-touch/angular-touch.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/ng-file-upload/ng-file-upload-all.js',
  ],
  vendorCSS: [
    'bower_components/bootstrap/dist/css/bootstrap.css'
  ],
  javascript: [
    'resources/ng/**/*.js'
  ],
  templates: [
    'resources/ng/**/*.html'
  ],
  style: [
    'resources/scss/void.scss'
  ],
  allStyles: [
    'resources/scss/**/*.scss'
  ]
};

gulp.task('styles', function() {
  gulp.src(paths.style)
    .pipe(sourcemaps.init())
    .pipe(compass({
      css:   './public/css',
      sass:  './resources/scss',
      image: './public/images'
    }))
    .on('error', function(error) {
      // Would like to catch the error here
      console.log(error);
      this.emit('end');
    })
    .pipe(bytediff.start())
    .pipe(cleanCSS())
    .pipe(bytediff.stop())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/css'));
});

//minify vendor css
gulp.task('vendor-styles', function() {
  gulp.src(paths.vendorCSS)
    .pipe(concat('vendor.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/css'));
});

//minify vendor js
gulp.task('vendor', function() {
  gulp.src(paths.vendor)
    .pipe(concat('vendor.js'))
    .pipe(bytediff.start())
    .pipe(uglify())
    .pipe(bytediff.stop())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(sourcemaps.init())
    .pipe(concat('void.js', {newLine: ';'}))
    // Annotate before uglify so the code get's min'd properly.
    .pipe(ngAnnotate({
        // true helps add where @ngInject is not used. It infers.
        // Doesn't work with resolve, so we must be explicit there
        add: true
    }))
    .pipe(bytediff.start())
    .pipe(uglify({mangle: true}))
    .pipe(bytediff.stop())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'));
});

//move templates
gulp.task('templates', function () {
  gulp.src(paths.templates)
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates']);
  gulp.watch(paths.allStyles, ['styles']);
	gulp.watch(paths.javascript, ['scripts']);
  gulp.watch(paths.vendorCSS, ['vendor-styles']);
});

gulp.task('default', ['styles', 'scripts', 'vendor', 'vendor-styles', 'templates'], function(){});
