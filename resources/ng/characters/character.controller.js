angular.module('voidCharacters')
  .controller('SingleCharacterController', singleCharacterLaunch);

singleCharacterLaunch.$inject = ['$stateParams','Character'];

function singleCharacterLaunch($stateParams, Character) {
  var vm = this;

  Character.getSingleCharacter('429').then(function(response) {
    console.log('response');
  });
  //vm.character = getCharacter;
}
