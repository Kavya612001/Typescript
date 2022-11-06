class Invoice {
    companyProfile: string;

    // Initializer for the class
    constructor(public name, public city, public state) {
        this.companyProfile = name+ ", "+city+", "+state;
    }
}

var googleInvoice = new Invoice("Google", "california", "state");
console.log(googleInvoice.companyProfile);

var yahooInvoice = new Invoice("Yahoo", "silicon valley", "state");
console.log(yahooInvoice.companyProfile);