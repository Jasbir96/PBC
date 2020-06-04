console.log("Hello All:)");
// primitive types=> number,string ,boolean,undefined,null
// let varName;
// varName = 10;
// varName = "I am a string";
// varName = true;
// varName = null;
// console.log(varName);
// Syntax => Java
let number = 23;
for (let div = 2; div * div <= number; div++) {
    if (number % div == 0) {
        console.log("Number is not prime");
        return;
    }
}
console.log("Number is prime");