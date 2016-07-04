angular
  .module('voidCore')
  .controller('HomePageController', HomePageController);

HomePageController.$inject = ['$scope'];

function HomePageController($scope) {
  var vm = this;
  vm.greeting = "Hi!";
  $scope.title = "test!";
  console.log($scope);
}
