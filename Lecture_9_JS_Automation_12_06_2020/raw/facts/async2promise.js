let fs = require("fs");
// polyfill
// abstraction
function fsprf(path) {
    // API 
    // technical solution
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (err, content) {
            if (err) {
                // console.log(err)
                reject(err);
            } else {
                // console.log("Content : " + content)
                resolve(content)
            }
        })
    });
}
//  a async fs.readfile
// 1. return promise
// 2. doesn't require cb
let readFilePromise = fsprf("f1.txt");
// user
readFilePromise.then(function (data) {
    console.log("inside then")
    console.log("Content" + data);

})

readFilePromise.catch(function (err) {
    console.log("Inside catch");
    console.log(err);
})
console.log("After");