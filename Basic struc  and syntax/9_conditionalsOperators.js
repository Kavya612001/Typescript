var x = 100;
if (x == 200) {
    console.log("Condition passed");
}
// We cant even compare it to a string with === operator here
if (x === 100) {
    console.log("triple equals used");
}
/* == only compares the values and ignores the datatype

    === compares both the value and the data type
*/
if (x != 100) {
    console.log("not equal to 100");
}
if (x >= 100) {
    console.log("Greater than or equal to 100");
}
// Compound conditionals
var email = "test@tet.com";
var password = "asdfgh";
if (password == "asdfgh" && email == "test@test.com") {
    console.log("You are authorized");
}
else {
    console.log("Incorrect password or email");
}
