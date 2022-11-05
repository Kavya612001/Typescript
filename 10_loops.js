// while , for in , for of
var x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
// Index values is displayed
console.log("for in: ");
var players = [6, 27, 21];
for (var player in players) {
    console.log(player);
}
// Actual value is displayed
console.log("for of: ");
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player);
}
