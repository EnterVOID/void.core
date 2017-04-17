angular
  .module('voidCore')
  .controller('LandingPageController', landingPage);

landingPage.$inject = ['$scope'];

function landingPage($scope) {
  var vm = this;
  vm.greeting = "Test greeting";
}
