let score="98";

console.log(score)
console.log(typeof(score))

console.log(typeof Number(score))

let numberScore="123abc"
let convertedScore=Number(numberScore)
console.log(typeof(convertedScore)) //123
console.log(Number(numberScore)) //NaN

console.log(parseInt(numberScore)) //123