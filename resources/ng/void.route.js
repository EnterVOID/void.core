angular
  .module('voidCore')
  .config(config);

config.$inject = ['$stateProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$urlRouterProvider'];

function config($stateProvider, $urlMatcherFactoryProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);
  $urlRouterProvider.otherwise("/404");
  $stateProvider
    .state('home_page', {
      url: "/",
      templateUrl: "js/home/show.html",
      controller: 'HomePageController',
      controllerAs: 'vm'
    })
    .state('single_character', {
      url: "/{id:int}",
      templateUrl: "js/characters/single.html",
      controller: 'SingleCharacterController',
      controllerAs: 'vm'
    });
}
