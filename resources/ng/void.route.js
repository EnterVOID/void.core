angular
  .module('voidCore')
  .config(config)
  .run(changeStateTo);

config.$inject = ['$stateProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$urlRouterProvider'];

function config($stateProvider, $urlMatcherFactoryProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);
  $urlRouterProvider.otherwise('/woopsies');
  $stateProvider
    .state('void',{
      abstract: true,
      templateUrl: 'js/main/show.html',
    })
    .state('void.root', {
      url: "/",
      redirectTo: 'void.landing',
    })
    .state('void.landing', {
      url: '',
      templateUrl: 'js/landing/show.html',
      controller: 'LandingPageController',
      controllerAs: 'vm'
    })
    .state('void.dashboard', {
      url: '/dashboard',
      templateUrl: 'js/dashboard/show.html',
      controller: 'DashboardController',
      controllerAs: 'vm'
    })
    .state('void.comics', {
      url: '/comics',
      templateUrl: 'js/comics/index.html',
      controller: 'ComicsController',
      controllerAs: 'vm'
    })
    .state('void.all_characters', {
      url: '/characters',
      templateUrl: 'js/characters/index.html',
      controller: 'CharactersController',
      controllerAs: 'vm'
    })
    .state('void.single_character', {
      url: '/characters/{id:int}',
      templateUrl: 'js/characters/single.html',
      controller: 'SingleCharacterController',
      controllerAs: 'vm'
    })
    .state('void.news', {
      url: '/news',
      templateUrl: 'js/news/show.html',
      controller: 'NewsController',
      controllerAs: 'vm'
    })
    .state('void.news_post', {
      url: '/news/{slug}',
      templateUrl: 'js/news/show.html',
      controller: 'NewsController',
      controllerAs: 'vm'
    })
    .state('void.community', {
      url: '/community',
      templateUrl: 'js/community/index.html',
      controller: 'CommunityController',
      controllerAs: 'vm'
    })
    .state('void.community_art', {
      url: '/community/art',
      templateUrl: 'js/community/art.html',
      controller: 'CommunityArtController',
      controllerAs: 'vm'
    })
    .state('void.community_art_post', {
      url: '/community/art/{slug}',
      templateUrl: 'js/community/art.html',
      controller: 'CommunityArtController',
      controllerAs: 'vm'
    });
}

// allow to redirect
changeStateTo.$inject = ['$rootScope', '$state'];
function changeStateTo($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function(evt, to, params) {
    if (to.redirectTo) {
      evt.preventDefault();
      $state.go(to.redirectTo, params, {location: 'replace'});
    }
  });
}
