let cap = {
    wait:0,
    setisAvenger: function (timer) {
        cap.wait = timer.t;
    }

}

setTimeout(function () {
    console.log("First call");
}, Number(cap.wait));

cap.setisAvenger({ t: 1000 });

setTimeout(function () {
    console.log("second call");
}, Number(cap.wait));
cap.setisAvenger({t:1500});
setTimeout(function () {
    console.log("Third  call");
}, Number(cap.wait));