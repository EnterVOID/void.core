angular
  .module('voidCore')
  .config(config);

config.$inject = ['$stateProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$urlRouterProvider'];

function config($stateProvider, $urlMatcherFactoryProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);
  $urlRouterProvider.otherwise("/state1");
  $stateProvider
    .state('home_page', {
      url: "/",
      templateUrl: "js/home/show.html",
      controller: 'HomePageController',
      controllerAs: 'vm'
    });
}
