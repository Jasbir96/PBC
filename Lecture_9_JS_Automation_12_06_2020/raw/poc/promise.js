let fs = require("fs");
console.log("Before");

function fsprf(path) {
    // API 
    // technical solution
    return new Promise(
        function (resolve, reject) {
            fs.readFile(path, function (err, content) {
                if (err) {
                    // console.log(err)
                    reject(err);
                } else {
                    // console.log("Content : " + content)
                    resolve(content);
                }
            });
        }
    );
}
// pending 
let f1WillBeReadPromise = fsprf("f1.txt");
console.log(f1WillBeReadPromise);
let thenKaPromise = f1WillBeReadPromise.then(function scb(data) {
    console.log("scb has ran");
    console.log("" + data);
    return 1000;
});
f1WillBeReadPromise.catch(function fcb(err) {
    console.log("Inside fcb");
    console.log(err);
});
// pending promise
console.log(thenKaPromise);
console.log("```````````````````````````````````")

setTimeout(function () {
    // settled =>value 
    // console.log(f1WillBeReadPromise);
    console.log("`````````````````````````````````");
    console.log(thenKaPromise);
}, 2000);
