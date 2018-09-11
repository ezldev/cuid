//main.js
angular
.module('app')
.controller('topicsCtrl', topicsCtrl)

topicsCtrl.$inject = ['$scope','$state','$location'];
function topicsCtrl($scope,$state,$location) {
 $scope.topicList=[
   {
     id:0,
     name : 'topic0'
   },
   {
    id:1,
    name : 'topic1'
  },{
    id:2,
    name : 'topic2'
  }
  ,{
    id:3,
    name : 'topic3'
  },
  
 ]
 $scope.topicSelected = function(topic){
  $location.url('/topic/'+topic.id);
 }

}