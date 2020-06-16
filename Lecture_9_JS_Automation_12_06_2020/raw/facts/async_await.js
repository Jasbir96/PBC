let fs = require("fs");
// syntax sugar=> promise ES7
(async function () {
    try {
        console.log("Before");
        let f1KaPromise = fs.promises.readFile("f1.txt");
        let content = await f1KaPromise;
        console.log("" + content)
        console.log("After");
    } catch (err) {
        console.log(err);
    }
})();
// ES5=> 
let f1KaPromise = fs.promises.readFile("f1.txt");
f1KaPromise.then(function (content) {
    console.log("" + content)
    console.log("After");
})
