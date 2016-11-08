var labApp = angular.model('labApp',[]);

labApp.controller('labListController',
                  function labListController($scope) {
                      $scope.labs = [
                          {
                              no: 1,
                              description: "lab 1"
                          },
                          {
                              no: 2,
                              description: "lab 1"
                          },
                          {
                              no: 1,
                              description: "lab 1"
                          }
                      ];
                  };
                 )
                          
