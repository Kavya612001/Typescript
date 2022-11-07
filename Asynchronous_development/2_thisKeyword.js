var Invoice = /** @class */ (function () {
    function Invoice(total) {
        this.total = total;
    }
    Invoice.prototype.printTotal = function () {
        console.log(this.total);
    };
    Invoice.prototype.printLater = function (time) {
        // setTimeout passes the execution of the program for some time specified
        setTimeout(function () {
            console.log("Inside fn of set timeout: " + this.total); //Here undefined is retured but this is used in nested function, and this doesnt have scope in nested function
        }, time);
        console.log(this.total);
    };
    Invoice.prototype.printLater1 = function (time) {
        var _this = this;
        setTimeout(function () {
            console.log("Inside fn of set timeout but arrow fn used: " + _this.total);
        }, time);
    };
    return Invoice;
}());
var invoice = new Invoice(130);
invoice.printTotal();
invoice.printLater(1000);
invoice.printLater1(1000);
