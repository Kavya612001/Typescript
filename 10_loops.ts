// while , for in , for of

var x: number = 0;
while(x < 10) {
    console.log(x);
    x++;
}

// Index values is displayed
console.log("for in: ")
let players: number[] = [6, 27, 21];
for (let player in players) {
    console.log(player);
}

// Actual value is displayed
console.log("for of: ");
for (let player of players) {
    console.log(player);
}