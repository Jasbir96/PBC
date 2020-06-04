// js=> 10days, java 
function sayHello() {
    // console.log("Hi " + toGreet);
    console.log(arguments);
}
// function overloading
sayHello("Steve");
sayHello();
sayHello("Steve", "Rogers");
sayHello("Steve", "Rogers","Tony");