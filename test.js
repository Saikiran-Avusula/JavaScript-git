// find bigger number : 4362
// 1. read the numbers -covert into string to read
// 2. check biggernum and store in varible 
// to compare with other numbers
// 3. compare with first numbers
// 4. comapre first numbr with other 
//     remain numbers
// 5. store the numbers in a varibale
// 6. print the numbr

// code 1 
// num=4362;
// big=String(num);
// max=big[0];
// for(i=1;i<big.length;i++){
//     if(big[i]>max){
//         max=big[i];
//     }
// }
// console.log("bigger num is: ",max)

//code 2 with prompt converting number into string
// num=prompt("enter number: ");
// max=num[0];
// for(i=1;i<num.length;i++){
//     if(num[i]>max){
//         max=num[i];
//     }
// }
// console.log("bigger num is: ",max)

//print sum of given num: 1273
// num=1273;
// var str=String(num);
// sum=0;
// for(i=0;i<str.length;i++) //read from index "0"
//     {
//    sum=sum+Number(str[i])
// }
// console.log("Sum  of numbers: ",sum)

// print number in horizontal upto 5 in reverse
// var a="";
// for(i=5;i>=1;i--){
//     a=a+i+" "
// }
// console.log(a)

//print number "i>=1" dont use, same as above Q.way
// var a="";
// for(i=5;i!=0;i--){
//     console.log(i);
// }

// var a="";
// for(i=5;!(i<=0);i--){
//     console.log(i);
// }

// print prime numbers
// 1. reading a Number (number=6)
// 2. checking divisible from (2, number-1)
// 3. then, if divide--not a prime
// 4. if not it a prime
var num=1;
if(num>1){
var store=String(num);
prime=true;
for(i=2;i<store;i++){
    if(store%i==0){
        prime=false;
        console.log("not a prime, num divisible by: ",i)
        break;
    }
}
if(prime==true){
     console.log("it's prime, divisble by max it's self",i)
}
}else{
    console.log("enter >1 ")
}
  



