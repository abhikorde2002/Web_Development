//OBJ literal

let phone=Symbol(123)
let arr={
    name:"Abhishek",
    age:22,
    [phone]:7710938122,
    gender:"Male",
    Worker:"Software Developer",
    email:"abhishekkorde44@gmail.com"
}
// console.log(arr.age);
// console.log(arr);
// console.log();
// console.log(arr["name"]);
//console.log(arr[phone]);

// Object.freeze(arr)
// arr.age=23
// console.log(arr);

arr.hello=function(){
    console.log("Hello Fello coder");
}
console.log(arr.hello());

