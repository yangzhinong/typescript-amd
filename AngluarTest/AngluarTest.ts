declare namespace angularTest {
    interface Test {
        name: string;
        likes: number;
        dislikes: number
    }

}

var myApp = angular.module("myApp", [])
    .filter("gender", function () {
        return function (gender:number) {
            switch (gender) {
                case 1:
                    return "Male";
                    
                case 2:
                    return "Female";
                case 3:
                    return "Not disclosed";
            }
        }
    })
        .controller("myController", function ($scope,$http:angular.IHttpService) {
            
            var tests: angularTest.Test[] = [
                { name: 'yzn', likes: 5, dislikes: 0 },
                { name: 'yq', likes: 0, dislikes: 0 },
                { name: 'rr', likes: 0, dislikes: 0 }
            ];
            var xScrop = <angular.IScope>$scope;
            
            $scope.tests = tests;
            $scope.addLike = function (t:angularTest.Test) {
                t.likes++;
            };
            $scope.decLike = function (t:angularTest.Test) {
                t.dislikes++;
            };
            $http.post('').then(function (data: IJsonMsg) { });
            
            $http({method:'GET',url:''}).then(function () { });


            
        });