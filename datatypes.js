// 1.	What is the value of typeof typeof true?
// Answer: The value of typeof typeof true is "string". This is because typeof true returns "boolean
let a=2;
console.log(typeof typeof a); //string

// 2.	What is the result of null == undefined?
// Answer: The result of null == undefined is true. In JavaScript, 
// null and undefined are both same belogs to same data types(primitive)
console.log(null == undefined); // true

// 3.	What is the value of +''? 
//Answer: The value of +'' is 0. This is because the unary + operator attempts
// to convert its operand to a number. When given an empty string, it returns 0.
// along empty is is by defalt as false. So, retuens 0
console.log(+''); // 0

// 4.	What is the result of [] == false?
// Answer: The result of [] == false is true. This is because when comparing an array
// to a boolean value, JavaScript first converts the array to a primitive value
console.log([] == false)

// 5. What is the value of {} + {}?
// Answer: The value of {} + {} is "[object Object][object Object]". This is
// because when you use the + operator on two objects, JavaScript first converts
// them to strings using the toString() method, and then concatenates the strings.
console.log({} + {}); // "[object Object][object Object]"

// 6. 	What is the value of typeof 42n?
// Answer: The value of typeof 42n is "bigint". This is because 42n
// is a BigInt literal, which is a new numeric type introduced in ECMAScript 2020
console.log(typeof 42n); // "bigint"

// 7.	What is the result of "" == false?
// Answer: The result of "" == false is true. This is because when comparing
// an empty string to a boolean value, JavaScript first converts the string
// to a boolean value using the ToBoolean abstract operation, which returns false
console.log("" == false); // true

// 8.	What is the value of Boolean("0")?
// Answer: The value of Boolean("0") is true. This is because when
// converting a string to a boolean value, JavaScript considers any non-empty
// string to be true, even if the string contains the character "0"
console.log(Boolean("0")); // true

// 9.	What is the result of [] === []?
// Answer: The result of [] === [] is false. This is because when comparing
// two arrays using the === operator, JavaScript checks whether the two arrays
// are the same object, not whether they have the same contents and 
// they have different memory address to store values.
console.log([]===[]); // false 

// 10.	What is the value of typeof Infinity?
// Answer: The value of typeof Infinity is "number". This is because
// Infinity is a numeric value that represents positive infinity.
console.log(typeof Infinity); // "number"

// 11.	What is the result of {} === {}?
// Answer: The result of {} === {} is false. This is because when comparing
// two objects using the === operator, JavaScript checks whether the two objects
// are the same object, not whether they have the same properties and values.
console.log({} === {}); // false

// 12.	What is the value of typeof NaN
// Answer: The value of typeof NaN is "number". This is because NaN (Not a Number
// is a numeric value that represents an invalid or unreliable numeric operation.
console.log(typeof NaN); // "number"




let boolean="false"
console.log(5!="3")
