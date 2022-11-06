// Hoisting - this will execute without any errors
console.log(fullName("kavya","sampath"));

// Function declaration
function fullName(first: string, last: string): string {
    return first+" "+last;
}

// Function expression - assigning function to a variable
// Function expressions should alwways be defined before they are called
var otherFullName : (first: string, last:string) => string;
otherFullName = function (first: string, last:string) {
    return first+" "+last;
}

var thirdFullName : (first: string, last:string) => string = function (first: string, last:string) {
    return first+" "+last;
}


console.log(otherFullName("kavya","sampath"));
console.log(thirdFullName("kavya","sampath"));