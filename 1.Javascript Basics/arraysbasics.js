const arr=[1,2,3,4,5,"AJ",true];

// arr.forEach(element => {
    // console.log(element);
// });

console.log(arr[1]);

let arr2=new Array(10,20,30,40,50);
console.log(arr2[3]);

// console.log(arr.length);
// console.log(arr2.length);
console.log(typeof arr);
console.log(typeof arr2);
arr2.pop();
arr2.push(61);
arr2.unshift(0);
arr2.shift();
console.log(arr2);

let newArr= arr2.join();
console.log(newArr);
newArr=newArr.split(",");
console.log(newArr);

 console.log(`Slice Example : ${arr2.slice(1,3)}`);
 console.log(arr2);
 console.log(`Splice Example : ${arr2.splice(1,3)}`);
 console.log(arr2);