angular.module('video-player')
  .service('youTube', function ($http) {
    this.search = function(query, callback){
      return $http({
        method: 'GET', 
        url: 'https://www.googleapis.com/youtube/v3/search', 
        params: {
          part: 'snippet',
          key: window.YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          type: 'video',
          videoEmbeddable: 'true'
        }
      }).done(data => callback(data.items))
        .fail(err => console.log('GET failed', err));
    }; 
  }); 
