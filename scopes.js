// 1. What is the output of:
var a = 10;
function foo() {
  console.log(a);
}
foo();
// output :10
// becasue, 1. interpreter read code line by line, So, it starts from var a=10;
// 3. Then, it will moves directly to funcion invoking then, goes to function block
// So, output wil be 10

// 2. What is the output of:
var b = 10;
function foo() {
  var b = 20;
  console.log(b);
}
foo();
// output: 20
// becasue, 1. interpreter read code line by line, So, it starts from var b=10;
// 3. Then, it will moves directly to funcion invoking then, goes to function block
// 4. moves to function block, here "b" value will be updated and updated value will be peinted  
// So, output wil be 20

// 3. What is the output of:
var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();
// output: undefined
// here, at first takesx valuesas 10->it is defined outside the function block
// then, moves to function invoke, when it enters to funcion block
//  Inside the foo function, it first logs the value of x, but then declares a new variable 
//  x with a value of 20 within the function.
// When the foo function is called, it will output undefined because JavaScript hoists the 
// variable declarations to the top of their containing function (or global context), but not 
// their initializations. This means that the x variable inside the foo function is hoisted to the 
// top of the function, but it is still undefined at the point where it is being logged.

// 4. What is the output of:
var x = 10;
function foo() {
  console.log(x);
}
var x = 20;
foo();
// output: 20
// - The variable x is initially declared and assigned a value of 10.
// - The function foo is defined which simply logs the value of x.
// - Then, the variable x is re-assigned a value of 20.
// - When the function foo is called, it will access the updated value of 
// x which is 20, and therefore the output will be 20. 

// 5. What is the output of:
function foo() {
  console.log(x);
}
var x = 10;
foo();
// output: 10
// because, when function foo is called it moves along with assigned value
// x=10; then logs the x value
// here, x value is assgined outside then block


// 6. What is the output of:
function foo() {
  console.log(x);
}
var x = 10;
foo();
// output: undefined
// explanation1: because, here function foo is called it moves to function block without 
// taking any values. So, when log x hs no value assigned. So, gives result as Undefined
// var x=10 is given next afterthe function foo() so, it can't read the line of code
//  after it but, it can be give output before it initialized.

// explanation2: When the function foo() is called, the variable x has not been assigned
//  a value yet and therefore it logs undefined. The variable x is declared and assigned a 
// value 10 after the function call, so it does not affect the output of the function.
