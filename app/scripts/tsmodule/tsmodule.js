define(["require", "exports", "./tsmoduleDependency"], function (require, exports, dependency) {
    "use strict";
    function tsmoduleFunction(what) {
        console.log("tsmoduleFunction called");
        dependency.sayIt(what);
    }
    exports.tsmoduleFunction = tsmoduleFunction;
});
//# sourceMappingURL=tsmodule.js.map