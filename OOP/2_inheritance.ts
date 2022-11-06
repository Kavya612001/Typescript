class Report {
    companyProfile: string;
    constructor(public name: string) {
        this.companyProfile = name;
    }
}

// All data and behaviour of report class is inherited
class Invoice extends Report {
    constructor(public name: string, public total: number) {
        super(name);
    }

    printInvoice() {
        return this.name+", "+this.total;
    }
}

class BillOfLading extends Report {
    constructor(public name: string, public city: string, public state: string) {
        super(name);
    }

    printBol() {
        return this.name+", "+this.city+", "+this.state;
    }
}

var invoice = new Invoice('Google',200);
console.log(invoice.companyProfile);
console.log(invoice.printInvoice());

var billOfLading = new BillOfLading("Yahoo",'Silicon valley','california');
console.log(billOfLading.printBol());