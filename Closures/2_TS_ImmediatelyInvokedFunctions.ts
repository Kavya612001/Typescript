// Immediately invoked functions neednt be called separately, the moment the interpreter see's, it executes the function
var names: string[] = ["kavya","rajesh","nandha","muthu"];
var counter: number = 0;
(function() {
    for(let name in names) {
        counter ++;
    }
})();
console.log(counter);