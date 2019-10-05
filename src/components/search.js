angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<'
    },
    controller: function(){
      this.inputClick = ($event) => {
        if($event.keyCode === 13){
          this.result(this.input);
          this.input = '';
        }
      };
      this.onClick = (input) => {
        this.result(input);
        this.input = '';
      }
    },
    templateUrl: 'src/templates/search.html' // TODO
  });
