var app = angular.module('labapp',[]);

app.controller('labListController', function ($scope, $http) {
    $scope.data = [];
    var data = $scope.data;              
    function reset()
    {
        $scope.data.displayLab = 0;
        $scope.data.filename = "";
    }
    $http.get('api.json').success(function(response) {
        $scope.data = response;
        reset();
        console.log($scope.data);
        console.log(data);
    });
    
    $scope.labfileDisplay = function(labno)
    {
        $scope.data.displayLab = labno;
    };
    $scope.codeDisplay = function(src)
    {
        $scope.data.filename = src;
    };
    
}
                                    
              );

                          
