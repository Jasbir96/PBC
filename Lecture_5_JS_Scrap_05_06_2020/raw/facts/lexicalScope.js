let myVar = 20;
function c() {
    console.log("Inside c " + myVar);
}

function b() {
    let myVar = 2;
    console.log("Inside b " + myVar);
    c();
}
function a() {
    let myVar = 1;
    console.log("Inside a " + myVar);
    b();
}

a();