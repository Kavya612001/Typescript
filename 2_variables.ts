// var, let, const
// We can reset the value of let but cant redefine let with the same variable name

var fullName: string = "Kavya Sampath";
let paidAccount: boolean = true;
const versionNumber: number = 1.3;

fullName = 'Rajesh dayalan'
paidAccount = false;


console.log(fullName);
console.log(paidAccount);
console.log(versionNumber);

function printName(firstName, lastName) {
    var greeting: string = "Hi there, ";
    console.log(greeting+firstName+" "+lastName);

    // We can redeclare var but it should be of same type, it cant be a number or boolean here
    var greeting: string = "Hey there, ";
    console.log(greeting+firstName+" "+lastName);
}

printName("prema","latha");