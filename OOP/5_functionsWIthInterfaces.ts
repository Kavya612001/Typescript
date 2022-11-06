// Structuring arguments of a functions via an Interface
interface InvoiceFun {
    (name: string, total: number): void;
}

let myInvoice: InvoiceFun;
myInvoice = function(n, t) {
    console.log(n);
    console.log(t);
}

myInvoice("google",3202);