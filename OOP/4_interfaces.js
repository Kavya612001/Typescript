function profile(user) {
    return "Welcome, ".concat(user.email);
}
var user = {
    email: "test@gmail.com"
};
console.log(profile(user));
console.log(user.email);
