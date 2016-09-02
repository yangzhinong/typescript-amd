var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "view/Base"], function (require, exports, Base) {
    "use strict";
    var TestApp = (function (_super) {
        __extends(TestApp, _super);
        function TestApp() {
            _super.call(this);
            this._title = "TypeScript AMD";
        }
        TestApp.prototype.createChildren = function () {
        };
        return TestApp;
    }(Base));
    return TestApp;
});
//# sourceMappingURL=TestApp.js.map