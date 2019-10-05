angular.module('video-player')
  .component('videoList', {

    // use the same name as you declared in the HTML(‘data’) and add it into a bindings object
    bindings: {
      // ‘<’: This is a one directional binding.
      //data: '<',
      videos: '<',
      onClick: '<',
    }, 
    controller: function($scope) {
    this.data = window.exampleVideoData;
    $scope.videos = this.data;
    console.log(this.data)
    }, 
    //linking the HTML
   
    templateUrl: 'src/templates/videoList.html', 
  

  });
  