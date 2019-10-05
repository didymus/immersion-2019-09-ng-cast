angular.module('video-player')
// .service('youTube', function($http) {
//   this.search = function(query, callback){
//     $http.get('https://www.googleapis.com/youtube/v3/search', {
//       params: {
//         part: 'snippet',
//         key: window.YOUTUBE_API_KEY,
//         q: query,
//         maxResults: 5,
//         type: 'video',
//         videoEmbeddable: 'true'
//       }
//     }).done(data => callback(data.items))
//       .fail(err => console.log('GET failed', err));
//   };
//   });
.service('youTube', function($http){
  let config = {
    q: '',
    maxResults = '5',
    part: 'snippet',
    videoEmbeddable: 'true',
    type: 'video',
    key: window.YOUTUBE_API_KEY
  };
  let fetch = function(query, callback){
    let request = 'https://www.googleapis.com/youtube/v3/search?';

  config.q = query;

  for(let key in config){
    request += `${key}=${config[key]}&`;
  }

  return $http.get(request).then(function(response){
    callback(response.data.items);
  }, function(response){
    console.log('error', response);
  });
  };

  return {
  search: _.debounce(fetch, 500)
  };
});