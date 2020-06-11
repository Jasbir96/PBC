let fs = require("fs");
console.log("Before");
// older 
fs.readFile("f1.txt", function (err, content) {
    if (err) {
        console.log(err)
    } else {
        console.log("Content : " + content)
    }
})
console.log("After");