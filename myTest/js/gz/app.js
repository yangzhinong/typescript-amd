define(["require", "exports", "./Base"], function (require, exports, Base) {
    "use strict";
    function start() {
        console.log("Hello world");
        var oBase = new Base();
        oBase.createChildren();
    }
    exports.start = start;
});
//# sourceMappingURL=app.js.map