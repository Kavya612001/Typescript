var Invoice = /** @class */ (function () {
    // Initializer for the class
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice("Google", "california", "state");
console.log(googleInvoice.companyProfile);
var yahooInvoice = new Invoice("Yahoo", "silicon valley", "state");
console.log(yahooInvoice.companyProfile);
