// obj - ability to encapsulate attribuites and methods 
// objects can also hold functions

var realUserObject = {
    email: 'test@test.com',
    firstName: 'Kavya',
    lastName: 'Sampath',
    // function keyword is not necessary
    sayHi() {
        return "Hey there!!"
    }
};

console.log(realUserObject.email);
console.log(realUserObject.firstName);
console.log(realUserObject.lastName);
console.log(realUserObject.sayHi());