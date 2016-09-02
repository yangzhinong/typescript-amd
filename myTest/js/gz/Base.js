define(["require", "exports"], function (require, exports) {
    "use strict";
    var Base = (function () {
        function Base() {
        }
        Base.prototype.createChildren = function () {
            console.log("Hello Create Child");
        };
        return Base;
    }());
    return Base;
});
//# sourceMappingURL=Base.js.map