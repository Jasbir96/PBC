// lib code
function lib(data) {

    for (let i = 2; i * i <= data; i++) {
        if (data % i == 0) {
            return false
        }
    }
    return true
}
// Developer code 
console.log("Number is prime? " + lib(21));
console.log("Number is prime? " + lib(23));
// you pass the data as well as cb functions that will called in diffrent senarios



// framework code
// declarative programming
function framework(data, scb, fcb) {
    for (let i = 2; i * i <= data; i++) {
        if (data % i == 0) {
            return fcb();
        }
    }
    // scb();
    return scb();
}
// inbuilt module 
let  {exec} = require("child_process");
// developer code => inversion of control
function scb() {
    console.log("Number is prime");
    // open => chrome
    exec('start chrome').unref();
}
function fcb() {
    console.log("Number is not prime");
    exec('calc').unref();
    // calculator
}

framework(21, scb, fcb);
framework(23, scb, fcb);

