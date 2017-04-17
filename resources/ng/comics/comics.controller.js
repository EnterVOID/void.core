angular.module('voidComics')
  .controller('ComicsController', comicsLaunch);

comicsLaunch.$inject = ['$state', '$stateParams'];

function comicsLaunch($state, $stateParams) {
  var vm = this;

  console.log($state);
}
