// Boolean, Number, String, Array, Tuple, Enum, Any, Void
var paidAccount = true;
// Number includes float too
var age = 21;
var taxRate = 7.5;
var fullName = "Kavya";
// Array
var ages = [22, 42, 12];
// Tuple
// When the no of elements and datatype is known, we can use tuple
var player;
player = [3, "rajesh", 34.2];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var job = ApprovalStatus.Pending;
// Any - error prone
var apiData = [123, "kavya", true];
// Void - used mostly in functions
function printOut(msg) {
    console.log(msg);
}
printOut("mango");
