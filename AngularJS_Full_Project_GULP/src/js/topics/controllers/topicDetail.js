//main.js
angular
.module('app')
.controller('topicDetailCtrl', topicDetailCtrl)

topicDetailCtrl.$inject = ['$scope','$state','uiGridConstants', 'uiGridGroupingConstants','FileUploader'];
function topicDetailCtrl($scope, $state,uiGridConstants, uiGridGroupingConstants, FileUploader) {
  $state.params.id

  //debugger;

 $scope.fileList =[
  {
    id:0,
    name:"filename",
    path:"path",
    version: "0",
    uploadedBy :"user",
    uploadedTs : "123",
    errStats :{},

  }
 ]


 var uploader = $scope.uploader = new FileUploader({
  url: 'upload.php'
});

// FILTERS

uploader.filters.push({
  name: 'customFilter',
  fn: function(item /*{File|FileLikeObject}*/, options) {
      return this.queue.length < 10;
  }
});

// CALLBACKS

uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
  console.info('onWhenAddingFileFailed', item, filter, options);
};
uploader.onAfterAddingFile = function(fileItem) {
  console.info('onAfterAddingFile', fileItem);
};
uploader.onAfterAddingAll = function(addedFileItems) {
  console.info('onAfterAddingAll', addedFileItems);
};
uploader.onBeforeUploadItem = function(item) {
  console.info('onBeforeUploadItem', item);
};
uploader.onProgressItem = function(fileItem, progress) {
  console.info('onProgressItem', fileItem, progress);
};
uploader.onProgressAll = function(progress) {
  console.info('onProgressAll', progress);
};
uploader.onSuccessItem = function(fileItem, response, status, headers) {
  console.info('onSuccessItem', fileItem, response, status, headers);
};
uploader.onErrorItem = function(fileItem, response, status, headers) {
  console.info('onErrorItem', fileItem, response, status, headers);
};
uploader.onCancelItem = function(fileItem, response, status, headers) {
  console.info('onCancelItem', fileItem, response, status, headers);
};
uploader.onCompleteItem = function(fileItem, response, status, headers) {
  console.info('onCompleteItem', fileItem, response, status, headers);
};
uploader.onCompleteAll = function() {
  console.info('onCompleteAll');
};

console.info('uploader', uploader);

 $scope.fileData = 
  [
    {
        "id": 0,
        "guid": "de3db502-0a33-4e47-a0bb-35b6235503ca",
        "isActive": false,
        "balance": "$3,489.00",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "name": "Sandoval Mclean",
        "gender": "male",
        "company": "Zolavo",
        "email": "sandovalmclean@zolavo.com",
        "phone": "+1 (902) 569-2412",
        "address": {
            "street": 317,
            "city": "Blairstown",
            "state": "Maine",
            "zip": 390
        },
        "about": "Fugiat velit laboris sit est. Amet eu consectetur reprehenderit proident irure non. Adipisicing mollit veniam enim veniam officia anim proident excepteur deserunt consectetur aliquip et irure. Elit aliquip laborum qui elit consectetur sit proident adipisicing.\r\n",
        "registered": "1991-02-21T23:02:31+06:00",
        "friends": [
            {
                "id": 0,
                "name": "Rosanne Barrett"
            },
            {
                "id": 1,
                "name": "Nita Chase"
            },
            {
                "id": 2,
                "name": "Briggs Stark"
            }
        ]
    }
 ]

 $scope.gridOptions =  {
  data: $scope.fileData,
  enableCellEditOnFocus: true,
  enableColumnResizing: true,
  enableFiltering: true,
  enableGridMenu: true,
  showGridFooter: true,
  showColumnFooter: true,
  fastWatch: true,
  //rowIdentity: getRowId,
  //getRowIdentity: getRowId,
  importerDataAddCallback: function importerDataAddCallback( grid, newObjects ) {
    $scope.myData = $scope.data.concat( newObjects );
  },
  columnDefs: [
    { name:'id', width:50 },
    { name:'name', width:100 },
    { name:'age', width:100, enableCellEdit: true, aggregationType: uiGridConstants.aggregationTypes.avg, treeAggregationType: uiGridGroupingConstants.aggregation.AVG },
    { name:'address.street', width:150, enableCellEdit: true },
    { name:'address.city', width:150, enableCellEdit: true },
    { name:'address.state', width:50, enableCellEdit: true },
    { name:'address.zip', width:50, enableCellEdit: true },
    { name:'company', width:100, enableCellEdit: true },
    { name:'email', width:100, enableCellEdit: true },
    { name:'phone', width:200, enableCellEdit: true },
    { name:'about', width:300, enableCellEdit: true },
    { name:'friends[0].name', displayName:'1st friend', width:150, enableCellEdit: true },
    { name:'friends[1].name', displayName:'2nd friend', width:150, enableCellEdit: true },
    { name:'friends[2].name', displayName:'3rd friend', width:150, enableCellEdit: true },
    { name:'agetemplate',field:'age', width:150, cellTemplate: '<div class="ui-grid-cell-contents"><span>Age 2:{{COL_FIELD}}</span></div>' },
    { name:'Is Active',field:'isActive', width:150, type:'boolean' },
    { name:'Join Date',field:'registered', cellFilter:'date', width:150, type:'date', enableFiltering: false },
    { name:'Month Joined',field:'registered', cellFilter: 'date:"MMMM"', filterCellFiltered: true, sortCellFiltered: true, width:150, type:'date' }
  ],
  onRegisterApi: function onRegisterApi(registeredApi) {
    gridApi = registeredApi;
  }
};
 
  

}