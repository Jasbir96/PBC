let files = ["f1.txt", "f2.txt", "f3.txt","f4.txt","f5.txt"];
let fs = require("fs");

for (let i = 0; i < files.length; i++) {
    let f1Promise = fs.promises.readFile(files[i]);
    f1Promise.then(function (data) {
        console.log("" + data);
    });
}
