angular.module('video-player', [])
// .component('app', {
//   controller: function($scope){
//     this.selectVideo = (index) => {
//       this.currentVideo = window.exampleVideoData; //this.videos[index];
//     };
//     this.updateVideos = (list) => {
//       this.videos = list;
//       this.currentVideo = this.videos[0];
//     };
//     this.onSearched = (input) => {
//       console.log(input);
//       youTube.search(input, this.updateVideos);
//     };
//     youTube.search('simulation theory', this.updateVideos);
//     this.currentVideo = this.videos ? this.videos[0] : {};
//   },
//   templateUrl: 'src/templates/app.html'
// })
.controller('appCtrl', function ($scope){
  // declare the data that you want to pass down to the child components.
  this.selectVideo = (index) => {
    this.currentVideo = window.exampleVideoData;
  }
})
.component('app', {
  controller: 'appCtrl', 
  templateUrl: 'src/templates/app.html',
})

