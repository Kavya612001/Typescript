class Invoice {
    total: number;

    constructor(total: number) {
        this.total = total;
    }

    printTotal() {
        console.log(this.total);
    }

    printLater(time: number) {
        // setTimeout passes the execution of the program for some time specified
        setTimeout(function(){
            console.log("Inside fn of set timeout: "+this.total); //Here undefined is retured but this is used in nested function, and this doesnt have scope in nested function
        }, time)
        console.log(this.total);
    }

    // When arrow function is used, it has access to the 'this'  
    printLater1(time: number) {
        setTimeout(() => {
            console.log("Inside fn of set timeout but arrow fn used: "+this.total);
        },time)
    }
}

var invoice = new Invoice(130);
invoice.printTotal();
invoice.printLater(1000);
invoice.printLater1(1000);
