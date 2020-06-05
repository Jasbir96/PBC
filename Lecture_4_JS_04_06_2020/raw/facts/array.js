let array = [1,
    1.1,
    "i am string",
    [1, 2, 3, 4, 5],
    { key: "value inside an array" }, function sayHi() {
        console.log("I am a  function inside array")
    }]
    ;
// for (let i in array) {
//     console.log(i);
//     console.log(array[i]);
//     console.log("```````````````````````````````````");
// }
// array[5]();
// array["5"]();
// console.log(arr[85])
// array[85]=45;
// console.log(array);

array.lastValue="Hello i am last value"
console.log(array)