angular.module('voidCore')
.directive('footer-content', navbarDirective);

navbarDirective.$inject = ['$state'];

function navbarDirective($state) {
  return {
    restrict: 'A',
    //scope: {},
    link: link,
    templateUrl: "js/footer/footer.html"
  };

  function link (scope, elem, attr) {
  }
}
