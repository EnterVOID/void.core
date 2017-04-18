angular.module('voidCommunity')
  .controller('CommunityController', communityLaunch);

communityLaunch.$inject = ['$state', '$stateParams'];

function communityLaunch($state, $stateParams) {
  var vm = this;

  console.log($state);
}
