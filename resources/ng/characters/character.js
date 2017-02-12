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
    return $http({
      method: 'GET',
      url: 'http://api.entervoid.com/characters/' + id
    })
    .then(characterPulled)
    .catch(function(err){
      console.log(err);
    });

    function characterPulled(response) {
      return response;
    }
  }

}
