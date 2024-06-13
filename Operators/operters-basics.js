// 1.Write a JavaScript function that takes two numbers and an operator ('+', '-', '*', '/')
//  as arguments and returns the result of the arithmetic operation.
function arithmetic(a,b)
{
    console.log("Addition: ",a+b);
    console.log("Subtraction: ",a-b);
    console.log("Multiplication: ",a*b);
    console.log("Division: ",a/b);
    console.log("square :" ,a*a);
    return (a,b)  
}
//aruthematic function usign arrow 
arithmetico=(a,b)=>{
    console.log("Addition: ",a+b);
    console.log("Subtraction: ",a-b);
    console.log("Multiplication: ",a*b);
    console.log("Division: ",a/b);
    return(a,b);
}
arithmetico(5,2)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Write a javascript function which takes three arguments 
//  (amount , rate of interest, no of years ) returns the total value of interest
// arithmetic(10,5);  //calling the function with arguments 10 and 5

function si(amount, roi, time){
    si = (amount * roi * time) / 100;
    console.log("Simple Interest: ", si);
    return (amount, roi, time);
}
si(1000, 5, 5); //calling arguments returns the value: 250

// aroow function
simplei=(asalu, vadde, time)=> simplei=(asalu, vadde, time)/100;
console.log("motham amount: ",simplei(1000, 1, 1));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Write a JavaScript function that takes a number as a argument and returns it's square value
// function takes number as argument returns as square
sq=(a)=>
{
console.log("square of 5:", a*a);
return a;
}
sq(5)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3. Write a JavaScript function that takes two numbers as a arguments and 
// returns the highest(max ) of the number using terinary operator inside a function
// terinary opertaor
let age = 18;
let result = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(result); // Eligible to vote 

// terinary operator
terinary=(a,b)=>{
    result=(a>=b)?"a is max value": "b is max value";
    console.log("the highest value:",result);
}
terinary(5,6)

