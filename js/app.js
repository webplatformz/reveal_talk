angular.module('reveal', ['ngMaterial'])

.controller('revealCtrl', function($scope, $http, $mdDialog, $timeout, $q) {
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
    
     $scope.color = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255)
  };
  $scope.rating1 = 3;
  $scope.rating2 = 2;
  $scope.rating3 = 4;
  $scope.disabled1 = 0;
  $scope.disabled2 = 70;
})
  .controller('tabCtrl', function ($scope, $log) {
    var tabs = [
      { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
      { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
      { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
      { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
      { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
      { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."}
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      if ( old && (old != current)) $log.debug('Goodbye ' + tabs[old].title + '!');
      if ( current )                $log.debug('Hello ' + tabs[current].title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      for (var j = 0; j < tabs.length; j++) {
        if (tab.title == tabs[j].title) {
          $scope.tabs.splice(j, 1);
          break;
        }
      }
    };
  });