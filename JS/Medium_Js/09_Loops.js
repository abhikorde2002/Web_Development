// const arr=[1,2,3,4]

// for (const i of arr) {
//     console.log(i);
// }
// const str="I am Abhi"
// for (const i of str) {
//     console.log(i);
// }

//Map 
const map= new Map()
map.set('In',"India")
map.set('Aus',"Australiya")
map.set('Nz',"Nuziland")

for (const [keys,value] of map) {
    console.log(keys,":-",value);
}