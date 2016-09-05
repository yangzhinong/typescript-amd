    var myApp = angular.module("myApp", [])
        .controller("myController", function ($scope) {
            interface Test {
                name: string;
                likes: number;
                dislikes: number
            }
            var tests: Test[] = [
                { name: 'yzn', likes: 5, dislikes: 0 },
                { name: 'yq', likes: 0, dislikes: 0 },
                { name: 'rr', likes: 0, dislikes: 0 }
            ];
            $scope.tests = tests;
            $scope.addLike = function (t:Test) {
                t.likes++;
            };
            $scope.decLike = function (t:Test) {
                t.dislikes++;
            };
        });