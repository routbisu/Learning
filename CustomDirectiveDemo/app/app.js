var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.heading = 'Customer Directive Demo';

    $scope.studentObj = {
        firstName: "Biswaranjan",
        lastName: "Rout",
        marks: 95
    };

    $scope.swapStudent = function() {
        $scope.studentObj = {
            firstName: "Deepa",
            lastName: "Rout",
            marks: 100
        }
    }

});

app.directive('studentInfo', function() {
    return {
        restrict: 'EA',
        scope: {
            studentObj: '=',
            swap: '&'
        },
        transclude: true,
        templateUrl: 'app/student.info.html'
    };
});