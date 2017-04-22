angular.module('voidComics')
  .factory('Comic', comicService);

comicService.$inject = ['$http'];

function comicService($http) {

  var service = {
    getAllMatches : getAllMatches
  };

  return service;

  ///////////

  function getAllMatches(config) {
    return $http.get('//api.entervoid.com/matches', config)
      .then(matchesPulled)
      .catch(function(err) {
        console.log(err);
      });
      
    function matchesPulled(response) {
      return response;
    }
  }

}
