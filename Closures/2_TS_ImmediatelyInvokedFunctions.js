// Immediately invoked functions neednt be called separately, the moment the interpreter see's, it executes the function
var names = ["kavya", "rajesh", "nandha", "muthu"];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
