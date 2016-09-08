module Application.Controllers {

    import Services = Application.Services;

    export class MyController {

        scope: any;
        customerService: Services.IMyService;
        data: any;

        constructor($scope: ng.IScope, customerService?: Services.IMyService) {
            this.scope = $scope;
            this.customerService = customerService;
            this.data = [{ name: 'yzn', age: '40' }, { name: 'yq', age: 33 }];  //必须用别名<div ng-controller="MyController as mc">
            this.scope.datas = this.data;  //用$scope对象,控制器就可以不用别名 con
        }

        private GetAll() {
            //this.customerService.GetAll((data) => {
            //    $.post('dd', {}, function (data: IJsonMsg) {

            //    });
            //    this.data = data;
            //});

            this.data = [{ name: 'yzngetall', age: '50' }, { name: 'yq', age: 33 }, { name: 'rr', age: 34 }]  //必须用别名 <button ng-click="mc.GetAll()">Get ALL</button>
        }
    }
}