var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var MyController = (function () {
            function MyController($scope, customerService) {
                this.scope = $scope;
                this.customerService = customerService;
                this.data = [{ name: 'yzn', age: '40' }, { name: 'yq', age: 33 }];
                this.scope.datas = this.data;
            }
            MyController.prototype.GetAll = function () {
                var _this = this;
                this.customerService.GetAll(function (data) {
                    $.post('dd', {}, function (data) {
                    });
                    _this.data = data;
                });
            };
            return MyController;
        }());
        Controllers.MyController = MyController;
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
//# sourceMappingURL=mycontroller.js.map