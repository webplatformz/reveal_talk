angular.module('reveal', ['ngMaterial'])

.controller('revealCtrl', function($scope, $http, $mdDialog) {
    $scope.coolMode = false;
    $scope.restURL = "";
    $scope.restresult = "";
    
    $scope.helpURL = function(){
       $scope.restURL = "http://transport.opendata.ch/v1/locations?query=Basel"; 
    }
    
    $scope.getUrl = function(ev){
        $http.get($scope.restURL).success(function(result){
            $mdDialog.show(
              $mdDialog.alert()
                .title('Answer')
                .content(JSON.stringify(result))
                .ok('Thanks!')
                .targetEvent(ev)
            );            
            $scope.restresult = JSON.stringify(result);
        }).error(function(){
            $mdDialog.show(
              $mdDialog.alert()
                .title('Error')
                .content('Something went wrong')
                .ok('Damn it!')
                .targetEvent(ev)
            );
        });
    };        
});