// Closures - used more in the Angular 
// encapsulate data and behaviour into the same object
// Functions have access to any public variable in the outer scope
function nameFunction(name) {
    var n = name;
    function printName() {
        console.log(n); //Referencing the variable outside the function
    }
    printName();
}
nameFunction("kavya");
// The inner function maintain access to the outer function even after the values are returned
function nameFunction1(name) {
    var n = name;
    return function () {
        console.log(n); //Referencing the variable outside the function
    };
}
var nameAgian = nameFunction1("faana");
nameAgian();
function lineUp() {
    var nowBatting = 1;
    return {
        nextBattler: function () {
            nowBatting++;
        },
        currentBatter: function () {
            return nowBatting;
        }
    };
}
// From this we can understand that the state of the variables is maintained by the function even after returning the function
var batters = lineUp();
batters.nextBattler();
console.log(batters.currentBatter());
batters.nextBattler();
console.log(batters.currentBatter());
batters.nextBattler();
console.log(batters.currentBatter());
batters.nextBattler();
console.log(batters.currentBatter());
var batters2 = lineUp();
console.log(batters2.currentBatter());
// Closures were created becoz javascript didnt have the concept of classes
