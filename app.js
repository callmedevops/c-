var app = angular.module('labapp',['ngRoute']);

app.controller('labListController', function ($scope, $route, $routeParams, $loation, $http) {
    $scope.data = [];
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    
    var data = $scope.data;              
    function reset()
    {
        $scope.data.displayLab = $routeParams.labId;
        $scope.data.filename = $scope.data.labs[$routeParams.labId].files[$routeParams.qNo].src;
        $scope.codeDisplay($scope.data.filename);
    }
    $http.get('api.json').success(function(response) {
        $scope.data = response;
        reset();
        
    });
    
    $scope.labfileDisplay = function(labno)
    {
        $scope.data.displayLab = labno;
    };
    $scope.codeDisplay = function(src)
    {
        $scope.data.filename = src;
        $http.get(src).success(function(response) {
            $scope.data.filecontent = response;
        });
    };
    
}
                                    
              );

app.config(function ($routeProvider) {
    $routeProvider
        .when("/:labId/:qNo",{
            
        }
             );
}
          );

                          
