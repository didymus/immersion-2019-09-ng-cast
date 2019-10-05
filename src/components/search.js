angular.module('video-player')
  .component('search', {
    bindings: {
      onSearched: '<'
    },
    controller: function(youTube){
    this.search = (query) => {
      youTube.search(query, data => {
      this.onSearched(data);
    })
    }
    },

    templateUrl: 'src/templates/search.html' // TODO
  });
