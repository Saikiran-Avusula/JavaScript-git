// let a=10;
// let b=10;
console.log(10+10); //addition of numbers
// result: 20

console.log(10+"10"); // addition of number with string 
// result:  1010

console.log(10+ +"10"); // additon of numbers with a number , string concadination
// here, intial "+" sign acts as addition opoeration and other acts as concadination operation
// result : 20

console.log(10+"10"+10);
// here, string "10" acts bot sies as concadination
// result: 101010

console.log(10-"2");
// here, string "2" is converted to number and then subtraction operation is performed
// result: 8

console.log(10-"2"-"8");
// here, string "2" and "8" are converted to number and then subtraction operation is performed
// result: 0

console.log(10>9>8);
// here, first comparison is done between 10 and 9, then result is compared with
// result: true

console.log(10*"10");
// here, string "10" is converted to number and then multiplication operation is performed
// result: 100

console.log(100/"100");
// here, string "100" is converted to number and then division operation is performed
// result: 1

console.log(100/"0");
// here, string "0" is converted to number and then division operation is performed
// result: Infinity

console.log(100+ +"100"-"100"*"100")
// first, it converts "100" general number to 100+100-100*100
// then, higher precision operation is multiplication then 100+100-10,000
// then, 200-10,000
// result: -9800

// comparsion operations

console.log(1 == "1");
// here, it checks if both values are equal becasue, "==" converts "1" into same 
// datatype,  it check the data type. Now, after conversion (perfomred type coercion - implicit coercion, 
// it will happen automatically when "==" loosely equal operand is used)
// result: true

console.log(1 === "1");
// here, it checks if both values are equal and also checks the data type if both  are equal then retuns true else flase
// result: false

console.log(1 == "one");
// here, it checks if both values are equal becasue, "==" converts "one"
// into same datatype, it will try to convert "one" into number but it will be NaN.

//  After coercing both operand types to be strings, JavaScript will compare the strings 
// "1" and "one". Since the strings are not equal in this case, the comparison will evaluate to false.

// result: false
console.log(1 === "one")
// here, it checks if both values are equal and also checks the data type if both  are equal then retuns true else flase
// result: false

console.log(1+true);
// here, true is converted to 1 and then addition operation is performed
// because in Boolean , true is defined as 1, So, 1+1=2
// result: 2

console.log(1-"true");
// here, "true" is converted to NaN and then subtraction operation is performed
// because in Boolean , true is defined as 1, but "true" is string, so
// The expression 1 - "true" will return the value NaN. This is because the subtraction operator - 
// cannot be used with a string value such as "true" and thus the result is NaN.
// result: NaN
 
console.log(1+true-false);
// here, true is converted to 1 and false is converted to 0 and then addition and
// subtraction operation is performed
// 1+1-0=2

console.log("1" + true);
// here, true is converted to "true" and then concatenation operation is performed 
// When using the + operator in JavaScript, if one of the operands is a string, JavaScript will attempt 
// to convert the other operand to a string and then concatenate the two strings
// result: "1true"

console.log(undefined == undefined);
// here, it checks if both values are equal becasue, "==" converts undefined
// into same datatype, it will check the data type. Now, after conversion (perfomred
// type coercion - implicit coercion, it will happen automatically when "==" loosely equal operand is used)
// result: true

console.log(null==null)
// here, it checks if both values are equal becasue, "==" converts null
// into same datatype, it will check the data type. Now, after conversion (perfomred
// type coercion - implicit coercion, it will happen automatically when "==" loosely equal operand is used)
// result: true

console.log(null===null)
// here, it checks if both values are equal and also checks the data type if both  are
// equal then retuns true else flase
// result: true

console.log(undefined==null)
// here, it checks if both values are equal becasue, "==" converts undefined
// into same datatype, it will check the data type. Now, after conversion (perfomred
// type coercion - implicit coercion, it will happen automatically when "==" loosely equal operand is used)
// result: true

console.log(undefined === null)
// here, it checks if both values are equal and also checks the data type if both  are
// equal then retuns true else flase
// result: false

console.log(2+NaN);
// here, NaN is not a number, so any operation with NaN will result in NaN
// result: NaN

console.log("2"+NaN);
// here, NaN is converted to "NaN" and then concatenation operation is performed
// result: "2NaN"

console.log("2"+undefined);
// here, undefined is converted to "undefined" and then concatenation operation is performed
// result: "2undefined"

console.log(2+undefined);
// here, undefined is converted to NaN and then addition operation is performed
// result: NaN

console.log( typeof "123");
// here, typeof operator is used to get the data type of the operand
// result: "string"

console.log(typeof 2);
// here, typeof operator is used to get the data type of the operand
// result: "number"

console.log(typeof true);
// here, typeof operator is used to get the data type of the operand
// result: "boolean"

console.log(typeof undefined);
// here, typeof operator is used to get the data type of the operand
// result: "undefined"

console.log(typeof null);
// here, typeof operator is used to get the data type of the operand
// result: "object" (this is a bug in JavaScript, it should return "null"
// but it returns "object" instead)

console.log(typeof []);
// here, typeof operator is used to get the data type of the operand
// because, it belongs to primitive datatypes
// result: "object" (because array is an object in JavaScript)

console.log(typeof 1n);
// here, typeof operator is used to get the data type of the operand
// result: "bigint" (because 1n is a BigInt literal)

console.log(typeof 1n+2n);
// result:bigint2
// here, typeof operator is used to get the data type of the operand
// result: "bigint" (because 1n+2n is a BigInt literal)

console.log(typeof 1+2n);
// here, typeof operator is used to get the data type of the operand
// result: "number2" (because 1+2n is a number, not a BigInt
// because JavaScript performs implicit conversion from BigInt to Number)

// The output will be "number2" 
// because the typeof operator takes precedence over the addition operation,
//  so it first evaluates typeof 1 which returns "number", and then adds it with 2n,
//  resulting in "number" + "2n" which is a string concatenation that combines the two values.


console.log(typeof 1/1n);
// here, typeof operator is used to get the data type of the operand
// result: "number" (because 1/1n is a number, not a BigInt
// because JavaScript performs implicit conversion from BigInt to Number)
// The output will be "number"  because the typeof operator takes precedence over the division operation,
// so it first evaluates typeof 1 which returns "number", and then divides it by 1
// resulting in "number" / "1n" which is a division operation that returns a number

