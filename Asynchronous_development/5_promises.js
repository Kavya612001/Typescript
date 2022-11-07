"use strict";
// pending - creating an api request
// complete - resolve in promise (Promise cameback true, everything went successfull)
// Reject - error in api response, something like that
// 3 stages of a promise - pedning, resolve, reject 
// anonymous function
var performUpload = function (imageStatus) {
    return new Promise(function (resolve) {
        console.log("Status: ".concat(imageStatus));
        setTimeout(function () {
            resolve({ imageStatus: imageStatus });
        }, 1000);
    });
};
var upload;
var compress;
var transfer;
performUpload('Uploading....')
    .then(function (res) {
    upload = res;
    return performUpload('compressing');
})
    .then(function (res) {
    compress = res;
    return performUpload('transfering');
})
    .then(function (res) {
    transfer = res;
    return performUpload('image upload completed');
});
