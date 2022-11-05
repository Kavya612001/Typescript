// ? makes the second argument optional 
// here state has a default arg value as Arizona which we can override 
// after optional param we cant have required params
// Default args can be placed anywhere, but optional params need to be placed at the end
function printAddress(street: string, streetTwo?: string, state: string = 'Arizona') {
    console.log(street);
    if(streetTwo){
        console.log(streetTwo);
    }
    console.log(state);
    console.log('-------------')
}

console.log('-------------');
printAddress('123 any st');
printAddress('153 kavya st', 'vnr');
printAddress('153 raju st', 'vnr', 'TN');

// Rest Argument (array of value is accepted - any value is considered as an array)
// String args - automatically converted into an array, dont pass array as an argument
function lineUpCard(teamName: string, ...players: string[]) {
    console.log('Team: '+teamName);
    for(let player of players) {
        console.log(player);
    }
    console.log(players);
}

lineUpCard("Mumbai team", "rohit","hardik","malinga");