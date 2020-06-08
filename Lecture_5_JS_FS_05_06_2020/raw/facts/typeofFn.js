// function statement
function sayHello() {
    console.log("Hello Everyone :) ");
}
// fn are variables
// function expression
let fnVar = function () {
    console.log("I am fn expression")
};
// IIFEE=> immediately invoked fn expression
(function anotherFn() {
    console.log("I was called immediately after  i was created");
})();
// Arrow function
let arrowFn = () => {
    console.log("I am an arow");
}
sayHello();
fnVar();
arrowFn();
