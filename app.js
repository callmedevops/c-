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
                $scope.codeDisplay($routeParams.qNo);
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
        
    }
    $http.get('api.json').success(function(response) {
        $scope.data = response;
        reset();
        //console.log($scope);
        
    });
    
    $scope.labfileDisplay = function(labno)
    {
        $scope.data.displayLab = labno;
        $scope.data.filename = "";
        $location.path("/"+labno);
    };
    $scope.codeDisplay = function(qNo)
    {
        $scope.data.filename = $scope.data.labs[$scope.data.displayLab].files[qNo].src;;
        $location.path("/"+$scope.data.displayLab+"/"+qNo);
        $http.get($scope.data.filename).success(function(response) {
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


