// Function Expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("kavya", "sampath"));
// Immediately invoked version
(function (first, last) {
    console.log(first + ' ' + last);
})("Nandha", "Kumar");
