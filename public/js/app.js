"use strict";
angular.module('magic', ['ngRoute',
 'controllers'
 ]);

angular.module('controllers', []);


angular.module('controllers').controller('configController', ['$scope', '$http', function($scope, $http){
  $scope.config = {};

  $http.get('/config').then(function(response){
    console.log(response.data);
    $scope.config = response.data
  });
}]);
