var app = angular.module('labapp',[]);

app.controller('labListController', [ '$http',
                                      function ($http) {
                                          var data = this;
                                          data.displayLab = 1;
                                          data.labs = [];
                                          data.filename = "";
                                          $http.get('labList.json').success(function(response) {
                                              data.labs = response;
                                          });
                                          data.labfileDisplay = function(labno)
                                          {
                                              data.displayLab = labno;
                                          };
                                          data.codeDisplay = function(src)
                                          {
                                              data.filename = src;
                                          };
                                          
                                          
                  }                                  ]
              );

                          
