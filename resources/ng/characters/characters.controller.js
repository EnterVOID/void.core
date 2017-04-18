angular.module('voidCharacters')
  .controller('CharactersController', characterLaunch);

characterLaunch.$inject = ['$state', '$stateParams'];

function characterLaunch($state, $stateParams) {
  var vm = this;

  activate();

  function activate() {
    return grabCharacter();
  }

  function grabCharacter() {
    //return Character.getSingleCharacter('429').then(function(response) {
      console.log($state);
    //});
  }
}
