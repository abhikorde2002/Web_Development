//Immediately Invoked Function Expressions IIFE

(function chai(){
    //Named IIFe
    console.log("My name is Abhishek");
})();

(()=>{
    //Simple IIFE
    console.log("My name is Hunter ");
})()

((name)=>{
    
    console.log(`My name is ${name} `);
})("Abhi")