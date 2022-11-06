// Namespace - gives the prog ability to nest items 
// Nice way of organising the code
// export keyword is used to make it available outside
namespace Blog{
    export interface IPost {
        title: string;
        body: string;
    }

    export class Post implements IPost {
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
}

namespace Content{
    export interface IPost {
        title: string;
        body: string;
        slug: string;
        seoKeyword: string;

    }

    export class Post implements IPost {
        title: string;
        body: string;
        slug: string;
        seoKeyword: string;

        constructor(post: IPost) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeyword = post.seoKeyword;
        }

        printPost() {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeyword);
        }
    }
}


// namespaceName.className
var post = new Blog.Post(
    {
        title: "Meee",
        body: "I love you!!"
    }
);

post.printPost();

var contentPost = new Content.Post(
    {
        title: "Meee",
        body: "I love you!!",
        slug: "my-post",
        seoKeyword: "any words"
    }
);

contentPost.printPost();