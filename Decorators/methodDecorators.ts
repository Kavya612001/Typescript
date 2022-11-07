@detailedLogMethod('billing')
class AccountsPayable {
    constructor() {}

    @admin //Method decorator is called
    deleteAccount() {
        console.log('Deleting account');
    }
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

function admin(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): any {
    console.log('Doing admin check');
    return descriptor;
}

var post = new AccountsPayable();
post.deleteAccount();