
module.exports.myfn = function myfn() {
    console.log("I am a fn exported from libModule");
}

module.exports.another = function anotherfn() {
    console.log("I am another fn exported from libModule");
}

function private() {
    console.log("I am a private fn don't export me");
}
console.log("I am libModule and i was compiled first  then my data was exported");
// jvcbzcvbcxj