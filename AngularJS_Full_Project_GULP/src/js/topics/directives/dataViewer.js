angular
.module('app')
.directive('dataViewer', dataViewer)

function dataViewer() {
    var directive = {
      restrict: 'E',
      link: link
    }
    return directive;
  
    function link(scope, element, attrs) {
      alert("in directive")

    }
  }