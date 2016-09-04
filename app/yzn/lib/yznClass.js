define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=yznClass.js.map