/// <reference path="defs/require/require.d.ts" />
define(["require", "exports", "tsmodule/tsmodule", "legacyJs", "jsmodule/newJs"], function (require, exports, tsmodule) {
    "use strict";
    function start() {
        // Use a legacy js module: 
        var legacyJs = require("legacyJs");
        legacyJs.legacyJsFunction("what legacyjs");
        legacyJs.legacyJsFunction2("what legacyjs Function2");
        // Use a new js module: 
        var newJs = require('jsmodule/newJs');
        newJs.newJsFunction("what newjs");
        // Use a typescript module: tsc makes this effortless
        tsmodule.tsmoduleFunction("what ts");
    }
    exports.start = start;
});
//# sourceMappingURL=app.js.map