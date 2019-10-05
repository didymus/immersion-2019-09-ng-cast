angular.module('video-player')
  .service('youTube', function ($http, $window) {
    this.search = function(query, callback){
      $http.get('https://www.googleapis.com/youtube/v3/search', { 
        params: {
          method: 'GET',
          part: 'snippet',
          key: $window.YOUTUBE_API_KEY,
          q: query,
          maxResults: 5,
          type: 'video',
          videoEmbeddable: 'true'
        },
      }).then(function({data}){
        if(callback){
          callback(data.items);
          console.log('Success!');
        }
      })
        .catch(function({data}){
          data.errors.errors.forEach(function(err){
            console.error('Failed!');
          });
        });
    }; 
  }); 
