const obj={
    name:"Abhi",
    age:22,
    num:7710938122
}
// for (const key in obj) {
//     console.log(obj[key]);
// }

// for (const key in obj) {
//     console.log(`${key}:- ${obj[key]}`);
// }

// for (const key in obj) {
//   console.log(`${key} is :- ${obj[key]}`);
// }

//We cant print map in for in loop
// const map= new Map()
// map.set('In',"India")
// map.set('Aus',"Australiya")
// map.set('Nz',"Nuziland")

// for (const key in map) {
//     console.log(map[key]);
    
// }

// const coding=['Java','JS','React','Devops']

// coding.forEach( (name) => {
//     console.log(`${name}`);
// });
// coding.forEach(function (name){
//     console.log(name);
// })

// coding.forEach((name)=>{
// console.log(name);
// })
//    const s= (name)=> console.log(name);
//    //console.log(s);
//  const ss=(name) => { console.log(name);} 
//  coding.forEach(s)
//  coding.forEach( (name)=> 
//     console.log(name)  
//  );

//  const str=(name,index,arr) =>  console.log(name,index,arr) 
//  //console.log(str());
//  coding.forEach(str)

const num=[
    {name:'Abhi',age:22,lang:'Java'},
    {skill:'DSA',company:'Gotatva',Role:'Solution Developer'},
    {name:'Abhi',age:22,lang:'Java'},

 ]
// num.forEach((item)=>{
//     console.log(item.skill);
// })
num.forEach((item)=> console.log(item.skill));


