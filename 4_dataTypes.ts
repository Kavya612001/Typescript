// Boolean, Number, String, Array, Tuple, Enum, Any, Void

let paidAccount: boolean = true;

// Number includes float too
let age: number = 21;
let taxRate:number = 7.5;

let fullName: string = "Kavya";

// Array
let ages: number[] = [22,42,12];

// Tuple
// When the no of elements and datatype is known, we can use tuple
let player: [number, string, number];
player = [3, "rajesh", 34.2] 

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any - error prone
var apiData: any[] = [123, "kavya", true];

// Void - used mostly in functions

function printOut(msg: string): void { //This function returns nothing - so void is used
    console.log(msg);
}

printOut("mango")