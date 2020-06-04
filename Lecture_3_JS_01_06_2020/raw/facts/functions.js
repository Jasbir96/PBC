// function sayHi(message) {
//     console.log("Hi " + message);
//     return 10;
// }
// let rVal = sayHi("Steve");
// sayHi("Rogers");

// console.log(rVal);
// Here you are accessing the address of the fn 
// console.log(sayHi);
// here you are acessing the function and running it's code
// console.log(sayHi("Steve"));
// functions are first class citizens
// 1. functions are variables


// assignment=>value of one variable could assigned to another varibale 
// assignment=>address of a function could assigned to another varibale 
let a = [1,2,3,4]
let b = a;
console.log(b);
let fnkaRef = function greeter() {
    console.log("Coz fns are variable");
    return 20;
}
console.log(fnkaRef);
console.log(fnkaRef())
//variables can be passed as a parameter
// functions can also be passed as a parameter
function greeter(param) {
    console.log("Inside greeter");
    console.log(param);
    param()
}
// greeter(10);
greeter(function innerfn() {
    console.log("I am passed as a parameter");
    let a = 10;
    console.log(++a);
})

// greeter("dsfbdmjhsv");
// greeter(true);
// greeter([1,2,3,4,5]);
// greeter(null);


