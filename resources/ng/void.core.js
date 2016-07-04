angular
  .module('voidCore', [
    /* AngularJS modules */
    'ngResource',
    'ngMaterial',

    /* 3rd party modules */
    'ui.router',
    'ngFileUpload',
    'hj.imagesLoaded',
    'angularMoment'
  ]).config(launchTheme);

launchTheme.$inject = ['$mdThemingProvider'];

function launchTheme($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('red');
}
