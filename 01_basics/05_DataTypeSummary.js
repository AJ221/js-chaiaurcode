//Primitive



//7 Types of Data Types in JS

//1. Number
//2. String
//3. Boolean
//4. Undefined
//5. Null
//6. BigInt
//7. Symbol


//Reference Data Types

//1. Object
//2. Array
//3. Function

//Array, Object, Function are all types of Objects in JS
//Date, RegExp etc are also types of Objects in JS


let BigNumer=1234567890123456789012345678901234567890n;
console.log(BigNumer)
console.log(typeof BigNumer)

let sym=Symbol("My identifier");
console.log(sym)
console.log(typeof sym)

const heros=["Shaktiman","Naagraj","Doga"];
console.log(heros)
console.log(typeof heros)

const myObj={
    name:"Akshit Juneja",
    age:28, 
}
console.log(myObj)
console.log(typeof myObj)

function myFunc(){
    console.log("Hello World");
}
console.log(myFunc)