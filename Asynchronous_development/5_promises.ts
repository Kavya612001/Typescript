"use strict";
// pending - creating an api request
// complete - resolve in promise (Promise cameback true, everything went successfull)
// Reject - error in api response, something like that

// 3 stages of a promise - pedning, resolve, reject 

// anonymous function
let performUpload = function(imageStatus: string) :Promise<{imageStatus: string}> {
    return new Promise((resolve) => {
        console.log(`Status: ${imageStatus}`);
        setTimeout( () => {
            resolve({ imageStatus: imageStatus}); // returns the value
        },1000);
    });
}

var upload;
var compress;
var transfer;

performUpload('Uploading....')
.then( (res) =>  {
    upload = res;
    return performUpload('compressing');
})
.then( (res) =>  {
    compress = res;
    return performUpload('transfering');
})
.then( (res) =>  {
    transfer = res;
    return performUpload('image upload completed');
});