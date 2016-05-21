angular
    .module('apple', ["slick", "ngTouch"])
    .controller('webController', WebController)




function WebController( $scope, $http) {
  
  $scope.m = true;

  $http.get('http://jsonplaceholder.typicode.com/users').success(function(data) {
            $scope.words = data;
  }).error(function(error) {
            console.log(error);
  });


  $scope.toggle1={show:false}
  $scope.toggle2={show:false}
  $scope.toggle2={show:false}
  $scope.toggle2={show:false}
  $scope.toggle5={show:false}
  $scope.toggle6={show:false}
  $scope.toggle7={show:false}

};