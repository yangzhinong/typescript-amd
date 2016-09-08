/// <reference path="mycontroller.ts" />

//然后编译到单个文件.
var appModule = angular.module("myApp2", []);

appModule.controller("MyController", ($scope)=> new Application.Controllers.MyController($scope));

appModule.factory("MyService", ["$http", "$location",
            ($http, $location) => new Application.Services.MyService($http,$location)]);

