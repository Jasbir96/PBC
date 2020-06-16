let fs = require("fs");
let f1KaPromise = fs.promises.readFile("f1.txt");
f1KaPromise.then(function (data) {
    console.log(data + "");
    return fs.promises.readFile("f2.txt");
}).then(function (data) {
    console.log(data + "")
});