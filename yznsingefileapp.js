var myApp = angular.module("myApp", ["ngRoute"])
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
    .controller("myController", function ($scope, $http, $log, $location, $anchorScroll) {
    $scope.relocationTo = function (id) {
        $location.hash(id);
        $anchorScroll.yOffset(20);
        $anchorScroll();
    };
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
    $http.post('').then(function (data) { }, function (reason) { $scope.error = reason; });
    $http({ method: 'GET', url: '' }).then(function () { $log.log(''); });
});
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var MyController = (function () {
            function MyController($scope, customerService) {
                this.scope = $scope;
                this.customerService = customerService;
                this.data = [{ name: 'yzn', age: '40' }, { name: 'yq', age: 33 }]; //必须用别名<div ng-controller="MyController as mc">
                this.scope.datas = this.data; //用$scope对象,控制器就可以不用别名 con
            }
            MyController.prototype.GetAll = function () {
                //this.customerService.GetAll((data) => {
                //    $.post('dd', {}, function (data: IJsonMsg) {
                //    });
                //    this.data = data;
                //});
                this.data = [{ name: 'yzngetall', age: '50' }, { name: 'yq', age: 33 }, { name: 'rr', age: 34 }]; //必须用别名 <button ng-click="mc.GetAll()">Get ALL</button>
            };
            return MyController;
        }());
        Controllers.MyController = MyController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
/// <reference path="mycontroller.ts" />
//然后编译到单个文件.
var appModule = angular.module("myApp2", []);
appModule.controller("MyController", function ($scope) { return new Application.Controllers.MyController($scope); });
appModule.factory("MyService", ["$http", "$location",
    function ($http, $location) { return new Application.Services.MyService($http, $location); }]);
var Application;
(function (Application) {
    var Services;
    (function (Services) {
        var MyService = (function () {
            function MyService($http, $location) {
                this.http = $http;
                this.location = $location;
            }
            MyService.prototype.GetAll = function (successCallback) {
                this.http.get(this.location.absUrl()).success(function (data, status) {
                    successCallback(data);
                }).error(function (error) {
                    successCallback(error);
                });
            };
            return MyService;
        }());
        Services.MyService = MyService;
    })(Services = Application.Services || (Application.Services = {}));
})(Application || (Application = {}));
define("app/scripts/tsmodule/tsmoduleDependency", ["require", "exports"], function (require, exports) {
    "use strict";
    function sayIt(what) {
        console.log("tsmoduleDependency : sayIt called.");
        console.log("Someone said: " + what);
    }
    exports.sayIt = sayIt;
});
define("app/scripts/tsmodule/tsmodule", ["require", "exports", "app/scripts/tsmodule/tsmoduleDependency"], function (require, exports, dependency) {
    "use strict";
    function tsmoduleFunction(what) {
        console.log("tsmoduleFunction called");
        dependency.sayIt(what);
    }
    exports.tsmoduleFunction = tsmoduleFunction;
});
/// <reference path="defs/require/require.d.ts" />
define("app/scripts/app", ["require", "exports", "app/scripts/tsmodule/tsmodule", "legacyJs", "jsmodule/newJs"], function (require, exports, tsmodule) {
    "use strict";
    function start() {
        // Use a legacy js module: 
        var legacyJs = require("legacyJs");
        legacyJs.legacyJsFunction("what legacyjs");
        legacyJs.legacyJsFunction2("what legacyjs Function2");
        // Use a new js module: 
        var newJs = require('jsmodule/newJs');
        newJs.newJsFunction("what newjs");
        // Use a typescript module: tsc makes this effortless
        tsmodule.tsmoduleFunction("what ts");
    }
    exports.start = start;
});
define("app/yzn/lib/Print", ["require", "exports"], function (require, exports) {
    "use strict";
    function Print() {
        console.log("Print");
    }
    exports.Print = Print;
});
define("app/yzn/lib/yznClass", ["require", "exports"], function (require, exports) {
    "use strict";
    var yznClass = (function () {
        function yznClass(x) {
            this.x = x;
        }
        yznClass.Log = function () {
            console.log('Class Log: ');
        };
        yznClass.prototype.Print = function () {
            console.log("Class Print" + this.x.toString());
        };
        return yznClass;
    }());
    exports.yznClass = yznClass;
});
define("app/yzn/lib/yznLog", ["require", "exports"], function (require, exports) {
    "use strict";
    function Log() {
        console.log("Log");
    }
    exports.Log = Log;
});
/// <reference path="../../typings/jquery/jquery.d.ts" />
define("app/yzn/main2", ["require", "exports", "app/yzn/lib/Print", "app/yzn/lib/yznLog", "app/yzn/lib/yznClass"], function (require, exports, print, log, yzn) {
    "use strict";
    (function () {
        print.Print();
        log.Log();
        var o = new yzn.yznClass(5);
        yzn.yznClass.Log();
        o.Print();
        $(document).ready(function () {
            $('#content').text("Hello world");
        });
    })();
});
//# sourceMappingURL=yznsingefileapp.js.map