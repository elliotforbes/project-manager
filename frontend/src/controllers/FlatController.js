app.controller("FlatController", ['$scope', 'Service', '$log', 
    function($scope. Service, $log) {
  $scope.flats = [];

  var init = function(){
      Service.get("flats/")
        .success(function (response){
            $log.log("Successfully retrieved flats");
            $scope.flats = response;
        })
        .error(function (response){
            $log.log("Error trying to retrieve flats");
            $log.log(response);
        });
  }

}]);