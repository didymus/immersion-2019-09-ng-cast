angular.module('video-player')
  .component('videoList', {
    bindings: {
    videos: '<',
    onClick: '<',
    },
    controller: function($scope){
    console.log($scope);
    },
  });
  // .directive('videoList', function(){
  //   return {
  //     scope: {
  //       videos: '<',
  //       onClick: '<',
  //   },

  //   controllerAs: 'ctrl',
  //   bindToController: true,
  //   controller: function($scope){
  //     console.log($scope);
  //   },

  //   templateUrl: 'src/templates/videoList.html'
  // };
  // });
  