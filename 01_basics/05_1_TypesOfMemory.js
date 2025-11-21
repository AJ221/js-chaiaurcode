/*
Types of Memory in JS

1. Stack Memory
2. Heap Memory

Stack Memory:
1. Stack memory is used to store primitive data types (Number, String, Boolean, Undefined, Null, BigInt, Symbol).
2. Stack memory is faster to access.
3. Stack memory has a LIFO (Last In First Out) structure.
4. Stack memory is used for static memory allocation.
5. The size of stack memory is limited. 

Heap Memory:
1. Heap memory is used to store reference data types (Object, Array, Function).
2. Heap memory is slower to access.
3. Heap memory does not follow any specific order.
4. Heap memory is used for dynamic memory allocation.
5. The size of heap memory is larger than stack memory.

*/
// console.log(parse("123abc")) //123

let userDetails_01={
    name:"Akshit Juneja",
    age:28,
    skills:["JavaScript","ReactJS","Java"],
    email:"akshit.juneja@gmail.com"
}

let userDetails_02=userDetails_01;
let userDetails_03 = new Object(userDetails_01);

userDetails_02.name="John Doe";
console.log(userDetails_01)
console.log(userDetails_02)
console.log(userDetails_03)

//userDetails_01 and userDetails_02 point to the same location in heap memory
//userDetails_03 points to a different location in heap memory

const name="Akshit Juneja";
const age=28;

console.log(`My name is ${name} and I am ${age} years old.`)
