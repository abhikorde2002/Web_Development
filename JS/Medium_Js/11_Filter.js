//const num=[1,2,3,4,5,6]

// const n=num.filter((num)=> { return num<5}
// )
// const a=num.filter((num)=>  num<5
// )

// const arr=[
//     {title: 'Book Nine', genre: 'History', publish: 1981,
//     edition: 1989},
//     {title: 'Book 10', genre: 'Non-Fiction', publish: 2010,
//     edition: 1989
//     },
//     {title: 'Book 11', genre: 'History', publish: 2013,
//     edition: 1989}
    
// ]
// const n= arr.filter((s)=> s.genre=='History' && s.publish >2000) 
// console.log(n);

const num=[1,2,3,4,5,6];

let ans=num.map((num)=> num*10 ).map((num)=> num+1).filter((num)=> num>50)
console.log(ans);

//Reduce 
const str=num.reduce( (acc,current)=> acc +current ,0)
console.log(str);

const shoping= [{ Lap:"Mac", Price:100000},
{ IPad:"M1", Price:50000}]

const a=shoping.reduce( (acc,item)=> acc+ item.Price,0)
console.log(a);

