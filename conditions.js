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
if (!false && true) {
  console.log('not false and true is true');
} else {
  console.log('not false and true is false');
} // true same as ques no.:5

// 8. What will be the output of this code:
if (5 === '5') {
  console.log('5 is equal to string 5');
} else {
  console.log('5 is not equal to string 5');
}//not equal to string b'casuse it checks data types and value as well

// 9. What will be the output of this code:
if (undefined == null) {
  console.log('undefined is equal to null');
} else {
  console.log('undefined is not equal to null');
}
// In JavaScript, when we use the == operator to compare a variable with null, 
// it will return true if the variable is either undefined or null. This is because 
// of type coercion in JavaScript, where the interpreter tries to convert both sides 
// of the comparison to a common type before making the comparison.
// Since undefined is considered equal to null when using the == operator, 
// the code will output "undefined is equal to null". This does not mean that
// undefined and null are the same data type, but that they are considered equal 
//in this specific comparison scenari


// 10. What will be the output of this code:
if (typeof [] === 'object') {
  console.log('Array is an object');
} else {
  console.log('Array is not an object');
}// same as qes.8 out out is array is equal to object

////////////////////////////////////////////////////////////////////////////////////////////////
//For loops
////////////////////////////////////////////////////////////////////////////////////////////////
// 1. What will be the output of this code:
for (var i = 0; i < 5; i++) {
  console.log(i);
} 
//output: 
// 0
// 1
// 2
// 3
// 4
//b'casuse, it wll starts from 0<5 and checks untill 5<5 
// so, it won't accept retuen upto 4<5 only


// 2. What will be the output of this code:
for (var i = 0; i < 5; i += 2) {
  console.log(i);
} 
// 0 , intial
// then, //i=i+2==>i=0+2=2;
// now, vaue becomes:2
// then, //i=i+2==>i=2+2=4;
// now, vaue becomes:4
// so, it will print 0,2,4 only
// b'casuse, it wll starts from 0<5 and checks untill
// 4<5 only, then it will stop. 
// So, result:0,2,4


// 3. What will be the output of this code:
for (var i = 5; i >= 0; i--) {
  console.log(i);
}
// here, we saying starts from:5
// 5>=0:prints :5, then 5--:will be 4
// 4>=0:prints :4, then 4--:will be 3
// 3>=0:prints :3, then 3--:will be 2
// 2>=0:prints :2, then 2--:will be 1
// 1>=0:prints :1, then 1--:will be 0
// 0>=0:prints :0, then 0--:will be -1
// but, -1 is not >=0, so it will stop here
// so, result:5,4,3,2,1,0
// but, it will print from 5 to 0 in reverse order

// 4. What will be the output of this code:
for (var i = 0; i < 5; i += 3) {
  console.log(i);
}
// here, we saying starts from:0
// 0<5:prints :0, then 0+3:will be 3
// 3<5:prints :3, then 3+3:will be 6
// but, 6 is not <5, so it will stop here
// so, result:0,3

// 5. What will be the output of this code:
for (var i = 0; i > 5; i++) {
  console.log(i);
}
// here, we saying starts from:0
// but, 0 is not >5, so it will stop here
// so, result:no output, because condition is not satisfied
// it will not print anything, because condition is not true
// so, result:nothing will be printed

// 6. What will be the output of this code:
for (var i = 5; i <= 0; i--) {
  console.log(i);
}
// here, we saying starts from:5
// but, 5 is not <=0, so it will stop here
// so, result:no output, because condition is not satisfied
// it will not print anything, because condition is not true
// so, result:nothing will be printed

// 7. What will be the output of this code:
for (var i = 5; i <= 0; i--) {
  console.log(i);
}
// here, we saying starts from:5
// but, 5 is not <=0, so it will stop here
// nothing will be print


// 8. What will be the output of this code:
for (var i = 0; i < 10; i += 4) {
  console.log(i);
}
// here, we saying starts from:0
// 0<10:prints :0, then 0+4:will be 4
// 4<10:prints :4, then 4+4:will be 8
// 8<10:prints :8, then 8+4:will be 12
// but, 12 is not <10, so it will stop here



// 9. What will be the output of this code:
for (var i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
//starts with 0, 0<5 condition accepted, i===3 is not equal, moves to print i value:0
// then i=1, 1<5 condition accepted, i===3 is not equal,
// moves to print i value:1
// then i=2, 2<5 condition accepted, i===3 is not equal,
// moves to print i value:2
// then i=3, 3<5 condition accepted, i===3 is equal, break
// so, it will stop here, no more iteration
// result:0,1,2


// 10. What will be the output of this code:
for (var i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// output: 0,1,2,3,4
// starts with 0, 0<5 condition accepted, i===2 is not equal,
// moves to print i value:0 
// then i=1, 1<5 condition accepted, i===2 is not equal,
// moves to print i value:1
// then i=2, 2<5 condition accepted, i===2 is equal, continue 
// skip this iteration, move to next iteration,becasue of continue keyword
// then i=3, 3<5 condition accepted, i===2 is not equal,
// moves to print i value:3
// then i=4, 4<5 condition accepted, i===2 is not equal,
// moves to print i value:4
// result:0,1,3,4
// 2 is skipped because of continue keyword


// 11. What will be the output of this code:
for (var i = 0; i < 5; i++) {
  if (i === 1) return;
  console.log(i);
}
// output: 0
// starts with 0, 0<5 condition accepted, i===1 is not equal,
// moves to print i value:0
// then i=1, 1<5 condition accepted, i===1 is equal, return
// return keyword stops the execution of the function, so it will stop here
// result:0

// Note: return keyword is used in functions, not in loops. In this case, it will
// throw an error because it's not inside a function.
// If it was inside a function, it would stop the execution of the function and return undefined
test=()=>{
  for (var i = 0; i < 5; i++) {
    if (i === 1) return;
    console.log(i);
  }
}
// test();
// output: 0
// undefined

