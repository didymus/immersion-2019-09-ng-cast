angular.module('video-player')
// .controller('searchCtrl', function($scope){
//   this.newQuery = '';
//   this.onClick = () => {
//     this.result(this.newQuery);
//   };
// })
// .directive('search', function(){
//   return {
//     scope: {
//       result: '<'
//     },
  
//   controllerAs: '$ctrl',
//   bindToController: true,
//   templateUrl: 'src/templates/search.html',
//   controller: 'searchCtrl'
//   };
// });
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
