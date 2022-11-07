// Decorators are just functions that take specific set of arguments
@detailedLogMethod('billing')
class AccountsPayable {
    constructor() {}
}

@detailedLogMethod('warehouse')
class ProductManager {
    constructor() {}
}

// Decorators must return a function
function detailedLogMethod(dashboard: string) {
    if(dashboard == 'billing') {
        console.log('working in the billing dept'); //Used to validate if the AccountsPayable class is billing oriented
        return function(target: Object) {};
    }
    else {
        return function(target: Object) {};
    }
}

var post = new AccountsPayable();
var pm = new ProductManager();