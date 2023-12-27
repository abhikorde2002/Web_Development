let ammount=10000
let buy=ammount
buy=20000
console.log(buy);
console.log(ammount); //Its called call by Value

//Call By Referance
let User={
    name:"Abhi",
    Age:21
}
let details=User
details.Age=22
console.log(details);
console.log(User);

