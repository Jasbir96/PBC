Array.prototype.mymap = function mymap(cb) {
    let narr = [];
    for (let i = 0; i < this.length; i++) {
        let ans = cb(this[i]);
        narr.push(ans);
    }
    return narr;
}

function transformer(elem) {
    if (elem % 2 == 0) {
        return elem + 1
    } else {
        return elem - 1;
    }
}


// let tarr = mymap(arr, transformer);
let arr = [3, 6, 14, 16, 22];
let tArr = arr.mymap(transformer);
console.log(tArr);