let fs = require("fs");
console.log("Before ");


// async fxn call
//async serial => you will start next task inside callback of first fn 
// callback hell
// normal
// fs.readFile("../../f1.txt", function f1cb(err, content) {
//     if (err) {
//         console.log("Inside err");
//         console.log(err);
//     } else {
//         console.log("Data of f1 arrived");
//         console.log("Content" + content);
//         fs.readFile("../../f2.txt", function f2cb(err, content) {
//             if (err) {
//                 console.log("Inside err");
//                 console.log(err);
//             } else {
//                 console.log("Data of f2 arrived");
//                 console.log("Content" + content);
//                 fs.readFile("../../f3.txt", function f3cb(err, content) {
//                     if (err) {
//                         console.log("Inside err");
//                         console.log(err);
//                     } else {
//                         console.log("Data of f3 arrived");
//                         console.log("Content" + content);
//                     }
//                 });
//             }
//         }
//         );
//     }
// }
// );

let fs = require("fs");
console.log("Before ");
function f1cb(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
        console.log("Data of f1 arrived");
        console.log("Content" + content);
        fs.readFile("../../f2.txt", f2cb);
    }
}

function f2cb(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
        console.log("Data of f2 arrived");
        console.log("Content" + content);
        fs.readFile("../../f3.txt", f3cb);
    }
}
function f3cb(err, content) {
    if (err) {
        console.log("Inside err");
        console.log(err);
    } else {
        console.log("Data of f3 arrived");
        console.log("Content" + content);
    }
}
// async fxn call 
fs.readFile("../../f1.txt", f1cb);
console.log("After ");

console.log("After ");