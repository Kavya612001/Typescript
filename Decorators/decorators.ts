class Post {
    @processOne() //This function is called here (they are called at run-time, not at the time the obj is instantiated) 
    @processTwo()
    someFunction() {}
}

// function that works as a decorator
function processOne() {
    console.log('ProcessOne has run');
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('processOne as been called');
    }
}
function processTwo() {
    console.log('ProcessTwo has run');
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('processTwo as been called');
    }
}

// ProcessOne has run
// ProcessTwo has run
// processTwo as been called
// processOne as been called