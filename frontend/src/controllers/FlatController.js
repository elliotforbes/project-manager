app.controller("FlatController", ['$scope', '$log', '$http',
    function($scope, $log, $http) {
 
  $scope.flats = [];

  $scope.save = function(newFlat) {
      $log.log($scope.newFlat);
      $http.post("http://localhost:3001/api/v1/flat/new")
        .success(function (response){
            $log.log("Successfully Saved the flat");
        })
        .error(function (response){
            $log.log("Failed to save flat to database");
            $log.log(response);
        })
  };

  $scope.getAll = function(){
      Service.get("flats/")
        .success(function (response){
            $log.log("Successfully retrieved flats");
            $scope.flats = response;
        })
        .error(function (response){
            $log.log("Error trying to retrieve flats");
            $log.log(response);
        });
  };

}]);