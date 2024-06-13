// Conditional Statements:
// 1. What will be the output of this code:
if (5 > 10) {
  console.log('5 is greater than 10');
} else {
  console.log('5 is less than or equal to 10');
}
//5 is lessthan or equal to 10

// 2. What will be the output of this code:
if (NaN === NaN) {
  console.log('NaN is equal to NaN');
} else {
  console.log('NaN is not equal to NaN');
  console.log("i'm not equal to even my self too! that's my special in Js")
}
//This will log false because NaN (Not a Number) is a 
// special value in JavaScript and it is not equal to any other 
// value, including itself. This is because NaN is used to represent 
// the result of an operation that cannot produce a normal numeric value.

// 3. What will be the output of this code:
if (!null) {
  console.log('null is truthy');
} else {
  console.log('null is falsy');
} //! it indicates not equal sign.

// 4. What will be the output of this code:
if (0 === '') {
  console.log('0 is equal to empty string');
} else {
  console.log('0 is not equal to empty string');
} // o is not equal to empty string is it an empty string is an object.
// is will checks datatype and value as well match in striclty equal. 


// 5. What will be the output of this code:
if (true && false) {
  console.log('true and false is true');
} else {
  console.log('true and false is false');
}
//true and false is false, becasue && checks both the cases have to true and statisfy.
// if any one of them is false then it will return false.


// 6. What will be the output of this code:
if (false || true) {
  console.log('false or true is true');
} else {
  console.log('false or true is false');
} // here, || is returns true b'cause it compares both stmts if any true, it returns true.
// So, false or true is true

// 7. What will be the output of this code:
// if (!false && true) {
//   console.log('not false and true is true');
// } else {
//   console.log('not false and true is false');
// }

// 1. What will be the output of this code:
// if (5 === '5') {
//   console.log('5 is equal to string 5');
// } else {
//   console.log('5 is not equal to string 5');
// }

// 1. What will be the output of this code:

// if (undefined == null) {
//   console.log('undefined is equal to null');
// } else {
//   console.log('undefined is not equal to null');
// }

// 1. What will be the output of this code:

// if (typeof [] === 'object') {
//   console.log('Array is an object');
// } else {
//   console.log('Array is not an object');
// }
