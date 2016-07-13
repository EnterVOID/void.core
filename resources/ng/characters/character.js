angular.module('voidCharacters')
  .factory('Character', characterService);

characterService.$inject = ['$http'];

function characterService($http) {

  var service = {
    getSingleCharacter : getSingleCharacter
  };

  return service;

  ///////////

  function getSingleCharacter(id) {
    return $http.get('http://api.entervoid.com/character/' + id)
      .then(characterPulled);

    function characterPulled(response) {
      console.log(response);
      return response;
    }
  }

}
