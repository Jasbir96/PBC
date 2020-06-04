// key :value pair 
// user,resource
let obj = {
    name: "Steve",
    lastname: "Rogers",
    address: {
        state: "New York",
        city: "Manhatten"
    },
    movies: ["Civil War ", "Avengers", "Winter Soldier"],
    age: 35,
    isAvenger: true,
    sayHi: function () {
        console.log("Cap say's Hi");
    }
}
console.log(obj);
console.log("``````````````````````````````````````````````````````");
// let val = obj.addres
// // GET
// console.log(obj.address)
// console.log(obj.movies[1])
// console.log(obj.isAvenger)
obj.sayHi();
// UPDATE,SET
obj.isAvenger = false;
// console.log(obj.isAvenger);
obj.friends = ["Tony", "Bruce", "Peter"];
// delete
delete obj.age;
obj.newfn=function newfn(){
    console.log(" I am a new fn");
}
obj.newfn()