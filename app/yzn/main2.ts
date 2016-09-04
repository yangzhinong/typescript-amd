/// <reference path="../../typings/jquery/jquery.d.ts" />



import print = require('./lib/Print');
import log = require("./lib/yznLog");
import yzn = require("./lib/yznClass");



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





