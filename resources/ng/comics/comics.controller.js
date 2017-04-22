angular.module('voidComics')
  .controller('ComicsController', comicsLaunch);

comicsLaunch.$inject = ['$state', '$stateParams', 'Comic'];

function comicsLaunch($state, $stateParams, Comic) {
  var vm = this;

  activate();

  function activate() {
    return grabComics().then(function(response) {
      pagerInit();
      console.log(vm.pager);
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
      console.log(response.data);
      console.log($stateParams);
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
      },
      "links": {
        "first": "/comics/",
        "previous": "/comics/results/" + vm.pager.pages.previous,
        "next": "/comics/results/" + vm.pager.pages.next,
        "last": "/comics/results/" + vm.pager.pages.last,
        "fart": this
      }
    };
  }


}
