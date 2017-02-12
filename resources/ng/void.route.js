angular
  .module('voidCore')
  .config(config);

config.$inject = ['$stateProvider', '$urlMatcherFactoryProvider', '$locationProvider', '$urlRouterProvider'];

function config($stateProvider, $urlMatcherFactoryProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);
  $urlRouterProvider.otherwise("/woopsies");
  $stateProvider
    .state('home_page', {
      url: "/",
      templateUrl: "js/home/show.html",
      controller: 'HomePageController',
      controllerAs: 'vm'
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "js/dashboard/show.html",
      controller: 'DashboardController',
      controllerAs: 'vm'
    })
    .state('all_characters', {
      url: "/characters",
      templateUrl: "js/characters/index.html",
      controller: 'CharactersController',
      controllerAs: 'vm'
    })
    .state('single_character', {
      url: "/characters/{id:int}",
      templateUrl: "js/characters/single.html",
      controller: 'SingleCharacterController',
      controllerAs: 'vm'
    })
    .state('news', {
      url: "/news",
      templateUrl: "js/news/show.html",
      controller: 'NewsController',
      controllerAs: 'vm'
    })
    .state('news_post', {
      url: "/news/{slug}",
      templateUrl: "js/news/show.html",
      controller: 'NewsController',
      controllerAs: 'vm'
    })
    .state('community', {
      url: "/community",
      templateUrl: "js/community/show.html",
      controller: 'CommunityController',
      controllerAs: 'vm'
    })
    .state('community_art', {
      url: "/community/art",
      templateUrl: "js/community/art.html",
      controller: 'CommunityArtController',
      controllerAs: 'vm'
    })
    .state('community_art_post', {
      url: "/community/art/{slug}",
      templateUrl: "js/community/art.html",
      controller: 'CommunityArtController',
      controllerAs: 'vm'
    });
}
