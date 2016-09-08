module Application.Controllers {

    import Services = Application.Services;

    export class MyController {

        scope: any;
        customerService: Services.IMyService;
        data: any;

        constructor($scope: ng.IScope, customerService?: Services.IMyService) {
            this.scope = $scope;
            this.customerService = customerService;
            this.data = [{ name: 'yzn', age: '50' }, { name: 'yq', age: 33 }];
            this.scope.datas = this.data;
        }

        private GetAll() {
            //this.customerService.GetAll((data) => {
            //    $.post('dd', {}, function (data: IJsonMsg) {

            //    });
            //    this.data = data;
            //});

            this.data = [{ name: 'yzngetall', age: '50' }, { name: 'yq', age: 33 }, { name: 'rr', age: 34 }]
        }
    }
}