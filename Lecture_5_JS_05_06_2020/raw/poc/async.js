let fs = require("fs");
console.log("Before");
// async functions
// you start the work but don't wait for completion=> ()
fs.readFile("f1.txt", frcb);
function frcb(err, content) {
    console.log("Content " + content)
    console.log("Actual After");
}
console.log("After");
console.log("I can do other things");
console.log("````````````````");