let score="98";

console.log(score)
console.log(typeof(score))

console.log(typeof Number(score))

let numberScore="123abc"
let convertedScore=Number(numberScore)
console.log(typeof(convertedScore)) //123
console.log(Number(numberScore)) //NaN

console.log(parseInt(numberScore)) //123


let stringNumber=String(456)
console.log(stringNumber + stringNumber) //456456
console.log(typeof(stringNumber)) //string


console.log(1+"2")
console.log("1"+2)
console.log("1"+2+3)
console.log(1+2+"3")


console.log(true)
console.log(+true)
console.log(+"")



/*

Converstion Operations :
// "33"--> Number  --> 33
// "33abc" --> Number --> NaN
// "33abc" --> parseInt --> 33
// "12.34abc" --> parseFloat --> 12.34
// true --> Number --> 1
// false --> Number --> 0
// null --> Number --> 0
// undefined --> Number --> NaN
*/