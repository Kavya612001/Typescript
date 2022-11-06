// Namespace - gives the prog ability to nest items 
// Nice way of organising the code
// export keyword is used to make it available outside
var Blog;
(function (Blog) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Blog.Post = Post;
})(Blog || (Blog = {}));
var Content;
(function (Content) {
    var Post = /** @class */ (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeyword = post.seoKeyword;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeyword);
        };
        return Post;
    }());
    Content.Post = Post;
})(Content || (Content = {}));
// namespaceName.className
var post = new Blog.Post({
    title: "Meee",
    body: "I love you!!"
});
post.printPost();
var contentPost = new Content.Post({
    title: "Meee",
    body: "I love you!!",
    slug: "my-post",
    seoKeyword: "any words"
});
contentPost.printPost();
