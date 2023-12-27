const arr=[1,2,3,4,5]
console.log(arr);

const str=new Array(1,2,3,4)
console.log(str);

str.push(3)
console.log(str);
str.pop()
console.log(str);

// str.unshift(6)
// console.log(str);
// console.log(str.shift());

const my= str.join()
console.log( my);
console.log(typeof str);
console.log("A",str)

const s=str.slice(1,3)
console.log(s);
console.log(str);

const st= str.splice(1,3)
console.log(st);
console.log(str);