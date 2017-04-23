angular.module('voidCharacters')
  .controller('SingleCharacterController', singleCharacterLaunch);

singleCharacterLaunch.$inject = ['$state', '$stateParams','Character'];

function singleCharacterLaunch($state, $stateParams, Character) {
  var vm = this;

  activate();

  function activate() {
    return grabCharacter();
  }

  function grabCharacter() {
    return Character.getSingleCharacter('429').then(function(response) {
      vm.character = response.data;
      console.log('test' + $state);
      console.log($stateParams);
    });
  }
}
