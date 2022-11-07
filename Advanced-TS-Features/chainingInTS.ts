type EmployeeType = {
    email: string;
    roles?: string[];
}

let data: {employees?: EmployeeType[]};

data = {
//     employees: [
//         {email: 'kavya612001@gmail.com', roles: ['admin', 'superAdmin']},
//         {email: 'rajeshkumar@gmail.com'},
//         {email: 'test@gmail.com'}
//     ]
};

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

// Optional chaning - only if data exsits (?) - or else undefined is returned
const formattedEmployees = data?.employees?.map((employee) => {
    return `${employee.email.toUpperCase()} ${employee.roles?.join(", ")}`;
})
console.log(formattedEmployees);