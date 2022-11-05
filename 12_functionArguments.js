// ? makes the second argument optional 
// here state has a default arg value as Arizona which we can override 
// after optional param we cant have required params
// Default args can be placed anywhere, but optional params need to be placed at the end
function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = 'Arizona'; }
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
    console.log('-------------');
}
console.log('-------------');
printAddress('123 any st');
printAddress('153 kavya st', 'vnr');
printAddress('153 raju st', 'vnr', 'TN');
// Rest operator (array of value is accepted - any value is considered as an array)
function lineUpCard(teamName) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + teamName);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
    console.log(players);
}
lineUpCard("Mumbai team", "rohit", "hardik", "malinga");
