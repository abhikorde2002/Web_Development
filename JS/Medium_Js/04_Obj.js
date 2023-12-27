//Singleton
//const str=new Array(1,2,3,4)

//Non Singleton
//console.log(str);
const str={}
str.name="Abhihsek"
str.age=22
str.phone=7710938122

const s= {
    email:"abhishekkorde44@gmail.com",
    lastname:"korde",
    fullname:{
        firstname:"Sonu",
        Middle:"Laxman",
        Last:"Korde"
    }

}

console.log(s.fullname?.Last);

const num={a:1,b:2}
const arrs={c:3,d:4}
const n={e:5,f:6}
const a=Object.assign({},n ,num,arrs)
console.log(a);

const ob={...num,...arrs}
console.log(ob);
console.log(Object.keys(s));
console.log(Object.values(s));
console.log();

const course={
    name:"Java-Dsa",
    price:"20000"
}

//OBjest Destructure 
const {price}=course

const {price:amount}=course
console.log(price);
console.log(amount);