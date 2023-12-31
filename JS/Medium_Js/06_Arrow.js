const userDetaile={
    user:"Abhishek",
    email:"abhishekkorde44@gmail.com",
    Welcome:function(){
         console.log(`${this.user} Welcome to Gym`);
       //  console.log(this);
    }
}
//In browser we are having window obj for this this key
// userDetaile.Welcome()
// userDetaile.user="Jack"
// userDetaile.Welcome()
// //This refere to Emp obj
// console.log(this);

//You can't us this in functions
// const chai=function (){
//     let user="Abhi"
//     console.log(user.this);
// }
// const chai= ()=>{
//     let user="Abhi"
//     console.log(user);
// }
//  console.log(chai());

const chai=(num1,num2)=>{
    return  num1+num2
}
// const chai=(num1,num2)=>num1+num2

//const chai=(num1,num2)=>(num1+num2)
      
// const chai=(num1,num2)=>({user:"Abhi"})
 console.log(chai(2,3));

