angular.module('video-player')
  .component('videoList', {
    // use the same name as you declared in the HTML(‘data’) and add it into a bindings object
    bindings: {
      videos: '<',
      onClick: '<',
    }, 
    controller: function() {
  
    }, 
    templateUrl: 'src/templates/videoList.html', 
  });
  