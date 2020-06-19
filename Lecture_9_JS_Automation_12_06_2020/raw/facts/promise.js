let fs = require("fs");

console.log("Before");
let f1kaPromise = fs.promises.readFile("f1.txt");

let thenKaPromise = f1kaPromise.then(function scb(data) {
    console.log("Content of F1 " + data);
    // return "string";
    return undefined;
})
console.log(thenKaPromise);

console.log("After");

setTimeout(function () {
    console.log(thenKaPromise);
    setTimeout(function () {
        thenKaPromise.then(function (data) {
            console.log("Inside then attcahed later");
            console.log(data);
        })
    }, 3000);

}, 1000);