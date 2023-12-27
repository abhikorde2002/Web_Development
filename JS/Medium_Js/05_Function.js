
function addTwonum(num1,num2){
    // console.log(num1+num2);
    // let res=num1+num2
    // return res
    return num1+num2
}
//addTwonum(5,6)

function loginUser(username){
    if(!username)
    {
        console.log("Please inter your name");
        return
    }
    return `${username} is just login`
}
console.log(loginUser());
// const add=addTwonum(2,5)
// console.log("Result",add);


//Rest operater ...num
function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(100,200,300))
 //OUT :- [ 100, 200, 300 ]

 function CalculateCartPrices(var1,...num1){
    return num1
}
console.log(CalculateCartPrices(100,200,300))

//
let obj={
    user:"Abhi",
    age:22
}
function handleObj(obj){
     console.log(`i am ${obj.user}, my age is ${obj.age}`);
}

handleObj(obj)


const arr=[100,200,300,400]

function returnValue(arr){
    return arr
}
console.log(returnValue(arr));