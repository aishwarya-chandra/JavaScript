// let score = "33abc" //NaN is not a number
// let score = "33" // 33
// let score = null // 0
// let score = undefined //NaN
let score = false //1 for true & 0 for false

// console.log(typeof score);
// console.log(typeof(score));


//converted in number
let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);
//------------------------------------------------------------
// let isLogged = "" //false
// let isLogged = "aish" //true
// let isLogged = 14 //true
// let isLogged = 0 //false


//converted to boolean
// let booleanIsLogged = Boolean(isLogged)
// console.log(booleanIsLogged);
//-------------------------------------------------------------
let someNum = 33 //33 as string

//converted to string
let stringNum = String(someNum)

// console.log(stringNum);
// console.log(typeof stringNum);

//******************Operations*******************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " aish"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);   //if string first then whole considered as string concatenation
// console.log(1 + 2 + "2");   // pehle do math add then string concatenation


//tricky conversion - not good for practise
// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let counter = 100
// counter++;
++counter;
console.log(counter);

// prefix postfix js mdn on internet 
// and 
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion






