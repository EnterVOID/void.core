angular.module('voidCore')
  .filter('toHtml', toHtmlFilter);

toHtmlFilter.$inject = ['$sce'];

function toHtmlFilter($sce) {
  return function(val) {
      return $sce.trustAsHtml(val);
  };
}
