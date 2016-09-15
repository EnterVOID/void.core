angular.module('voidCharacters')
  .controller('SingleCharacterController', singleCharacterLaunch);

singleCharacterLaunch.$inject = ['$stateParams','Character'];

function singleCharacterLaunch($stateParams, Character) {
  var vm = this;
  
  activate();

  function activate() {
    return grabCharacter();
  }

  function grabCharacter() {
    return Character.getSingleCharacter('429').then(function(response) {
      vm.character = response.data;
      console.log(vm.character);
      console.log(vm.character.name);
      console.log(vm.character.gender);
    });
  }
}
