angular.module('video-player', [])  
.component('app', {
  controller: function(youTube){
    this.selectVideo = (index) => {
      this.currentVideo = this.videos[index];
    };
    this.updateVideos = (list) => {
      this.videos = list;
      this.currentVideo = this.videos[0];
    };
    this.onSearched = (input) => {
      youTube.search(input, this.updateVideos);
    };
    youTube.search('AngularJS tutorial', this.updateVideos);
    //this.currentVideo = this.video ? this.videos[0] : {};
  },
  templateUrl: 'src/templates/app.html',
  });
