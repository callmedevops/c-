var app = angular.module('labapp',['ngRoute']);

app.controller('labListController', function ($scope, $route, $routeParams, $location, $http) {
    $scope.data = [];
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    
    var data = $scope.data;              
    function reset()
    {
        if($routeParams.labId)
        {
            $scope.data.displayLab = $routeParams.labId;
            
            if($routeParams.qNo)
            {
                $scope.data.filename =$scope.data.labs[$routeParams.labId].files[$routeParams.qNo].src;
            }
            else
            {
                $scope.data.filename = "";
            }
        }
        else
        {
            $scope.data.displayLab = 0;
        }
        
        $scope.codeDisplay($scope.data.filename);
    }
    $http.get('api.json').success(function(response) {
        $scope.data = response;
        reset();
        console.log($scope);
        
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
             )
        .when("/:labId",{
        }).
        when("/",{
   
});
}
          );


