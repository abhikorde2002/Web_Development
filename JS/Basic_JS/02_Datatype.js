let num=21
let st="Hello"
let ans=true
let str=null // Stand alone value
//Undefined => We have not given value yet (its type)
//Symbols => Unique

//Object
// console.log(typeof null)
// console.log(typeof st)
// console.log(typeof str)
// console.log(typeof undefined)

//Premitive
//String , Num, Boolean , null , undefined , Symbol , BigInt

//Non Premitive
//Array, Object, Functions

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime 
//and can change throughout the program as we assign different values to them.
//BigInt
let nums=3432432322333223n
console.log(nums)
let id=Symbol('124')
let ids=Symbol('124')

console.log(id === ids);

const heros=["Abhi","Jack"]
let MyOBJ={name:"Abhishek", age:21}
const myFunction= function(){
    console.log("Hello")
}