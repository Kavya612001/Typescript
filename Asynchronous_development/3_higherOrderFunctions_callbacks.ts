// callback - just like methods

// Anonymous function
 // Callback , non blocking nature
var dbQuery = function(): void {
    setTimeout(() => {
        console.log("Query results");
    },3000)
}

// Higher order function - a function takes callback function as an argument
// Takes a success msg, failure msg etc....
function loadPage(q: () => void ) {
    console.log("header");
    q(); //Query results is printed after 3s but the below console logs are printed before that
   
    console.log("sidebar");
    console.log("footer");
}

loadPage(dbQuery);

// Callback functions are usually anonymous so that we can pass it as an argument in another function(higher order function)