let fs = require("fs");
console.log("Before");
async function reader(i) {
    console.log("Between-1");
    await fs.promises.readFile(`f${i}.txt`);
    console.log("Between-2");
}
// async function reader2() {
//     console.log("Between r2");
//     let fsp = fs.promises.readFile("f2.txt");
//     console.log(fsp);
// }
// let rVAl = reader();
// console.log("On line 15");
// console.log(rVAl);
// reader2();
// console.log("After");
for (let i = 1; i <= 2; i++) {
    let val = reader(i);
   
}
