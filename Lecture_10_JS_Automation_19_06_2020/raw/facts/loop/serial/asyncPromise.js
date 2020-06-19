let files = ["f1.txt", "f2.txt", "f3.txt", "f4.txt", "f5.txt"];
let fs = require("fs");
let f1Promise = fs.promises.readFile(files[0]);

for (let i = 1; i < files.length; i++) {
    f1Promise = f1Promise.then(function (data) {
        console.log("" + data);
        return fs.promises.readFile(files[i]);
    });
}

f1Promise.then(function (data) {
    console.log("" + data);
})
