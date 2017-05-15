var httpApp = angular.module('httpApp', []);

httpApp.controller('peopleCtrl', function($scope, $http){
    $http.get('database.json').then(function(response){
        $scope.persons = response.data.records;
    })
});