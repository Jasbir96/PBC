let fs = require("fs");

async function fsprf(path) {
    // API 
    // technical solution

    fs.readFile(path, function (err, content) {
        if (err) {
            // console.log(err)
            return err;
        } else {
            // console.log("Content : " + content)
            return content
        }
    })

}
// let readFilePromise = fsprf("f1.txt");
// // user
// readFilePromise.then(function (data) {
//     console.log("inside then")
//     console.log("Content" + data);

// })

// readFilePromise.catch(function (err) {
//     console.log("Inside catch");
//     console.log(err);
// })
// console.log("After");