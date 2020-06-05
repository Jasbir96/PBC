let arr = [3, 6, 14, 16, 22];
function transformer(elem) {
    if (elem % 2 == 0) {
        return elem + 1
    } else {
        return elem - 1;
    }
}
function test(elem) {
    for (let i = 2; i * i <= elem; i++) {
        if (elem % i == 0) {
            return false
        }
    }
    return true;
}
function squarer(elem) {
    return elem * elem;
}
// let newArr = arr.map(transformer);
// // console.log(newArr);
// // console.log("````````````````````````````````");
// // console.log(arr);
// let fArr = newArr.filter(test);
// console.log(fArr);
// console.log("``````````````````````````````````````");
// console.log(arr);
// lodash => 
function mymap(arr, cb) {
    let narr = [];
    for (let i = 0; i < arr.length; i++) {
        let ans = cb(arr[i]);
        narr.push(ans);
    }
    return narr;
}
let tarr = mymap(arr, transformer);
tarr = mymap(arr, squarer);
// myfilter(arr,transformer);
console.log(tarr);
