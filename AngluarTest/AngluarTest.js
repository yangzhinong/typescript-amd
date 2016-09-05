var myApp = angular.module("myApp", [])
    .controller("myController", function ($scope) {
    var tests = [
        { name: 'yzn', likes: 5, dislikes: 0 },
        { name: 'yq', likes: 0, dislikes: 0 },
        { name: 'rr', likes: 0, dislikes: 0 }
    ];
    $scope.tests = tests;
    $scope.addLike = function (t) {
        t.likes++;
    };
    $scope.decLike = function (t) {
        t.dislikes++;
    };
});
//# sourceMappingURL=AngluarTest.js.map