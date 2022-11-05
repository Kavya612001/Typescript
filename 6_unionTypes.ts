// Here the array type can be either string or number
type PlayerArray = Array<string | number>;

let players: PlayerArray = ["kavya","rajesh","nandhu"];
let players_numbers: PlayerArray = [6, 27, 21];
console.log(players);
console.log(players_numbers);

// Here names can be either a string array or a string datatype
var names: string[] | string;
names = ["snekha", "vanmathi", "sura"];
console.log(names);
names = "Nancy";
console.log(names);