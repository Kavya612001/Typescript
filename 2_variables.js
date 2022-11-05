// var, let, const
// We can reset the value of let but cant redefine let with the same variable name
var fullName = "Kavya Sampath";
var paidAccount = true;
var versionNumber = 1.3;
fullName = 'Rajesh dayalan';
paidAccount = false;
console.log(fullName);
console.log(paidAccount);
console.log(versionNumber);
function printName(firstName, lastName) {
    var greeting = "Hi there, ";
    console.log(greeting + firstName + " " + lastName);
    var greeting = "Hey there, ";
    console.log(greeting + firstName + " " + lastName);
}
printName("prema", "latha");
