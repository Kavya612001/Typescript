// callback - just like methods
// Anonymous function
var dbQuery = function () {
    setTimeout(function () {
        console.log("Query results");
    }, 3000);
};
// Higher order function - a function takes another function as an argument
function loadPage(q) {
    console.log("header");
    q();
    console.log("sidebar");
    console.log("footer");
}
loadPage(dbQuery);
