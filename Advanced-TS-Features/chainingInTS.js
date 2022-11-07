var _a;
var data;
// data = {
//     employees: [
//         {email: 'kavya612001@gmail.com', roles: ['admin', 'superAdmin']},
//         {email: 'rajeshkumar@gmail.com'},
//         {email: 'test@gmail.com'}
//     ]
// };
// let formattedEmployees;
// if(data && data.employees) {
//     // map takes an callback function as an argument
//     formattedEmployees = data.employees.map( (employee: EmployeeType) => {
//         let roles;
//         if(employee.roles) {
//             roles = employee.roles.join(', ');
//         }
//         return `${employee.email.toUpperCase()} ${roles}`;
//     })
// }
var formattedEmployees = (_a = data === null || data === void 0 ? void 0 : data.employees) === null || _a === void 0 ? void 0 : _a.map(function (employee) {
    var _a;
    return "".concat(employee.email.toUpperCase(), " ").concat((_a = employee.roles) === null || _a === void 0 ? void 0 : _a.join(", "));
});
console.log(formattedEmployees);
