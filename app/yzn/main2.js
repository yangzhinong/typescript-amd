/// <reference path="../../typings/jquery/jquery.d.ts" />
define(["require", "exports", './lib/Print', "./lib/yznLog", "./lib/yznClass"], function (require, exports, print, log, yzn) {
    "use strict";
    (function () {
        print.Print();
        log.Log();
        var o = new yzn.yznClass(5);
        yzn.yznClass.Log();
        o.Print();
        $(document).ready(function () {
            $('#content').text("Hello world");
        });
    })();
});
//# sourceMappingURL=main2.js.map