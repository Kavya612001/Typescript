// Hoisting - this will execute without any errors
console.log(fullName("kavya", "sampath"));
// Function declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function expression - assigning function to a variable
// Function expressions should alwways be defined before they are called
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(otherFullName("kavya", "sampath"));
console.log(thirdFullName("kavya", "sampath"));
