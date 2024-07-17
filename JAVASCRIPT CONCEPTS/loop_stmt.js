// 1. code for add all even numbers in an array 
let a=[1,2,3,4,5,6];
let sum=0;
for(var i=0;i<a.length;i++)
  {
    if(a[i]%2==0)
    {
      // console.log("even numbers:",+a[i]);
      sum=sum+a[i];
      }
    }
console.log("sum of even numbers is :",+sum);



//2. Use a do-while loop to print the numbers from 1 to 10, 
// but only if the number is not equal to 5.
let num=1;
do{
  if(num!=5){
    console.log(+num);
  }else{
    console.log("skipped number 5");
  }
  num++;
}while(num<=10)
 


// 3. Write a program using a while loop to find the average of all numbers in an array. 
// If the average is greater than 50, print "Average is large".
  var total_value=0;
  var avg=0;
  let index=0;
  arr=[1,2,3,4,5,6];
  while(index<arr.length)
  {
    total_value=(total_value+arr[index]);
    index++;
    avg=(total_value/6);
  }
  if(avg>=50)
    {
      console.log("average is Large: "+avg);
    }
    else{
      console.log("average is not large than 50: "+avg);
    }



// 4. built using technics , print left angle triangle.
var n=5;
for(var i=1;i<=n;i++)
  {
      for(var j=1;j<=i;j++)
        {
          process.stdout.write("* ");
        }
    process.stdout.write("\n")    
  }



// 5.check whether given input string is palindrome or not?
// I/p:mom-->is a palindrome
// I/p:father:--->is not a palindrome
let string="father";
let reverseString=string.split("mom").reverse(string).concat("mom");
if(string==reverseString){
    console.log("it is a palinfrom");
}else{
    console.log("it is not a palindrom");
}


// 6.Write a program using a do-while loop to print the numbers from 10 to 1, 
// but only if the number is odd. If the number is even, print "Skipping even number".
// Example: let num = 10;
// Output: 9, Skipping even number, 7, 
// Skipping even number, 5, Skipping even number, 3, Skipping even number, 1
var number=10;
do{
    if(number%2==!0)
        {
            console.log(number);
        }else{
            console.log("Skipping number");
        }
        number--;
}while(number>=1);


























    


  




