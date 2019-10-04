angular.module('video-player', [])  
.component('app', {
  
  controller: function(youTube){
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    },
    this.onSearched = () => {
      
    },
    templateUrl: 'src/templates/app.html'
  }
  });
