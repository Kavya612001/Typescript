// firstName and lastName are optional 
interface User {
    email: string;
    firstName?: string;
    lastName?: string;
}

function profile(user: User): string {
    return `Welcome, ${user.email}`;
}

var user = {
    email: "test@gmail.com",
};

console.log(profile(user));
console.log(user.email);