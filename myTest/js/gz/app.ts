import Base=require("./Base");

export function start() {
    console.log("Hello world");
    var oBase = new Base();
    oBase.createChildren();
}