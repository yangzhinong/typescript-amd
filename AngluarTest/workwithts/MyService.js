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
//# sourceMappingURL=MyService.js.map