define(["require", "exports"], function (require, exports) {
    "use strict";
    function sayIt(what) {
        console.log("tsmoduleDependency : sayIt called.");
        console.log("Someone said: " + what);
    }
    exports.sayIt = sayIt;
});
//# sourceMappingURL=tsmoduleDependency.js.map