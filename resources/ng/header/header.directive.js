angular.module('voidCore')
.directive('navbar', navbarDirective);

navbarDirective.$inject = ['$state'];

function navbarDirective($state) {
  return {
    restrict: 'A',
    //scope: {},
    link: link,
    templateUrl: "js/header/header.html"
  };

  function link (scope, elem, attr) {
  }
}
