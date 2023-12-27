const str= "I am Abhi"
const num=22

//Template literals (Template strings)  to create strings by doing substitution of placeholders
console.log(`Hi guys, ${str} and i am ${num}  old `);

const s= new String('Abhishek l')

console.log(s[0]);
const b= s.trim()
const j=s.split(' ')
console.log(j[0]);
//console.log(b)
console.log(str.concat(" "+s));
console.log(s.replace(' ', ''))
console.log(s.indexOf('a'))
console.log(s.substring(0,5))
console.log(s.slice(-8,4));
console.log(s.includes('Abhi'))