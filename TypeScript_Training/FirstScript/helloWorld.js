var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log(this.greeting);
    };
    return Greeter;
}());
var BigGreeter = (function (_super) {
    __extends(BigGreeter, _super);
    function BigGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BigGreeter.prototype.bigGreet = function () {
        console.log("Hello " + this.greeting);
    };
    return BigGreeter;
}(Greeter));
var greeter = new BigGreeter("Biswa");
greeter.greet();
greeter.bigGreet();
