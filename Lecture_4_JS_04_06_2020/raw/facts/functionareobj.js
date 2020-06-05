function fn() {
    console.log("I am fn");
}
console.log(fn);
fn.myprop = "I am property of a function";

fn.myfn = function () {
    console.log("I am a method of a object that could be called");
}
console.log("```````````````````````````````");
console.log(fn);
console.log(fn.myprop);
fn.myfn();
fn();