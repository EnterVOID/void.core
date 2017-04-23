angular.module('voidCore')
.directive('pagerNav', pagerNavDirective);

function pagerNavDirective() {
  return {
    restrict: 'A',
    scope: {
      page: '=',
      link: '=',
    },
    link: link,
    templateUrl: '/js/components/pager-nav/show.html'
  };

  function link(scope, elem, attr) {
  }
}
