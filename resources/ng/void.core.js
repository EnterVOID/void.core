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
  ]).config(launchSite);

launchSite.$inject = ['$mdThemingProvider', '$httpProvider'];

function launchSite($mdThemingProvider, $httpProvider) {
  apiProviderSetup($httpProvider);
  themeSetup($mdThemingProvider);
}

function apiProviderSetup($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}

function themeSetup($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '900',
      'hue-1': '200',
      'hue-2': '400',
      'hue-3': '700'
    })
    .accentPalette('red', {
      'default': '600',
      'hue-1': '400',
      'hue-2': '900',
      'hue-3': 'A700'
    })
    .backgroundPalette('grey', {
      'default': '400'
    });
}
