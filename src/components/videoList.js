angular.module('video-player')
  .component('videoList', {
    bindings: {
    videos: '<',
    onClick: '<',
    },
    controller: function($scope){
    console.log($scope); // probably will have to change this
    },
    templateUrl: 'src/templates/videoList.html'
  });
  