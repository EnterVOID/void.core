angular.module('voidComics')
  .controller('ComicsController', comicsLaunch);

comicsLaunch.$inject = ['$state', '$stateParams', 'Comic'];

function comicsLaunch($state, $stateParams, Comic) {
  var vm = this;

  vm.endCountdown = function(match) {
    match.pastDue = true;
    console.log('done!');
  };

  activate();

  function activate() {
    return grabComics().then(function(response) {
      pagerInit();
    });
  }

  function grabComics() {
    var comicsPage = $stateParams.id ? $stateParams.id : 1;
    var comicsParams = {
      params: {
        page: comicsPage
      }
    };
    return Comic.getAllMatches(comicsParams).then(function(response) {
      vm.matches = response.data;
      angular.forEach(vm.matches.data, function(value, id) {
        if (vm.matches.data[id].due_date) {
          vm.matches.data[id].time_left = moment(vm.matches.data[id].due_date, 'YYYY-MM-DD HH:MM:SS').valueOf();
          console.log(vm.matches.data[id].time_left);
        }
      });
    });
  }

  function pagerInit() {
    vm.pager = {
      "pages": {
        "first": 1,
        "current": vm.matches.current_page,
        "previous": vm.matches.current_page > 1 ? vm.matches.current_page - 1 : 1,
        "next": vm.matches.current_page < vm.matches.last_page ? vm.matches.current_page + 1 : vm.matches.last_page,
        "last": vm.matches.last_page
      }
    };
  }


}
