var myApp = angular.module("myApp", [])
    .filter("gender", function () {
    return function (gender) {
        switch (gender) {
            case 1:
                return "Male";
            case 2:
                return "Female";
            case 3:
                return "Not disclosed";
        }
    };
})
    .controller("myController", function ($scope, $http) {
    var tests = [
        { name: 'yzn', likes: 5, dislikes: 0 },
        { name: 'yq', likes: 0, dislikes: 0 },
        { name: 'rr', likes: 0, dislikes: 0 }
    ];
    var xScrop = $scope;
    $scope.tests = tests;
    $scope.addLike = function (t) {
        t.likes++;
    };
    $scope.decLike = function (t) {
        t.dislikes++;
    };
    $http.post('').then(function (data) { });
    $http({ method: 'GET', url: '' }).then(function () { });
});
//# sourceMappingURL=AngluarTest.js.map