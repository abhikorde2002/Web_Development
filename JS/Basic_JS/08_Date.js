let date= new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

let times=new Date("12-24-2023")
console.log(times.toDateString());
console.log(times.toLocaleString());

let tim= times.getTime()
console.log(tim);

console.log(times.getTime());

console.log(Math.floor(tim/1000));

console.log(times.getDate());
console.log(times.getMonth());

console.log(times.toLocaleString('default',{
   // weekday:"long",
   // dateStyle:"full"
   day:"2-digit"
}));