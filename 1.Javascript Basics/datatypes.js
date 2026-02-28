"use strict";
/*
alert("Hello World!!");//we are using node js so we cannot use alert function

function greet(name){
    console.log("Hello "+name);
}
greet("Akshit");


function studentDetails(name,age,city){
    console.log("Name: "+name);
    console.log("Age: "+age);
    console.log("City: "+city);
    console.table({name:name,age:age,city:city});
    return {name:name,age:age,city:city};
}

let StringNum="123";
console.log(typeof StringNum);
let typeCastNum=Number(StringNum);
console.log(typeof typeCastNum);
let byDefaultValue;
console.log(byDefaultValue);
console.log(typeof byDefaultValue);
console.log(Number(byDefaultValue));


console.log(1+2+"3");

let num=10;
let num1=num;
console.log(num);

let akshitDetails= studentDetails("Akshit",29,"Delhi");

function updateStudentDetails(akshitDetails){
    studentDetails("Ajuneja",28,"Chandigarh");
    
    return studentDetails;
}

console.log("akshitDetails : "+akshitDetails.age,akshitDetails.name,akshitDetails.city);
console.log(updateStudentDetails(akshitDetails));
*/

//Stack memory and heap memory

let StackMemory=10;
let StackMemory1=StackMemory;
console.log(StackMemory);
console.log(StackMemory1);
StackMemory1=20;
console.log(StackMemory);
console.log(StackMemory1);


let userDetails={
    useremail:"user@example.com",
    upiId:"user@upi",
};

let userDetails1=userDetails;

userDetails1.useremail="test@example.com";

console.log(userDetails);
console.log(userDetails1);