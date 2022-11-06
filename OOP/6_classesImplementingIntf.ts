// Loosely connected Interface with class
interface User {
    email: string;
    firstName?: string;
    lastName?: string;
}

class Admin {
    role: string;
    constructor(public email: string) {
        this.role = "Admin";
    }
}

function profile(user: User): string {
    return `Welcome ${user.email}`;
}

var joe = new Admin("joe@gmail.com");
console.log(profile(joe));
console.log(joe.role);

// Direct Implementation (commonly used in Angular)
interface IPost {
    title: string;
    body: string;
}

class Post implements IPost {
    title: string;
    body: string;

    constructor(post: IPost) {
        this.title = post.title;
        this.body = post.body;
    }

    printPost() {
        console.log(this.title);
        console.log(this.body);
    }
}

var post = new Post(
    {
        title: "Meee",
        body: "I love you!!"
    }
);
console.log(post.title);
console.log(post.body);

post.printPost();