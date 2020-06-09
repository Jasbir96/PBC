let fs = require("fs");
let files = ["../../f1.txt", "../../f2.txt", "../../f3.txt", "../../f4.txt", "../../f5.txt"];
for (let i = 0; i < files.length; i++) {
    fs.readFile(files[i], function (err, content) {
        if (err) {
            console.log("Inside err");
            console.log(err);
        } else {
            console.log(`Data of f${i + 1} arrived`);
            console.log("Content" + content);
        }
    })
}