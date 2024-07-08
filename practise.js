// input: Enter a number: 567
// output: 765

// num=12345;
// store=String(num)
// hline=""
// for(i=store.length-1;i>=0;i--){

//     hline=hline+store[i]+" "

// }
// console.log(hline);

// fibanoci
// without methods print 1*2*3*4*5=120
// var num=5;
// product=1
// star=""
// sai=""
// for(i=1;i<=num;i++){
//    product=product*i;
//    if(i<num){
//    star=star+i+"*";
//    }
//    else
//    star=star+i

// }
// console.log(star+"="+product);

// with methods print 1*2*3*4*5=120
// var num=5;
// product=1;
// star="";
// for(i=1;i<=num;i++){
//     product=product*i;
//     star+=i+" ";
//     temp=star.trim().split(" ").join("*")+"="+product
// }
// console.log(temp);

// num=10;
// var a=0;
// var b=1
// // side=""
// for(i=1;i<=num;i++){
//     if(a>num)
//     {
//     // side+=a+" ";
//     console.log(a);
//     c=a+b;
//     a=b;
//     b=c;
//     }
// }
// console.log(side);

// print fibanoci number which is equal to 10 
// num=15;
// var a=0; var b=1; res=""
// for(i=1;i<=num;i++){
//        if(a>=num) //a value print chesa ka number ki equal ga unte, 
//                     // until it will print upto =10, if not after 10 digits will print 
//        break;
//       res=res+a+" "
//             c=a+b;
//             a=b;
//             b=c;

// }  
// console.log(res);

// print non-fibanoci numbers upto given numbers
// num= 7;
// a=0; b=1;
// count=0;
// while(count!=num){
// for(i=a+1;i<b;i++){
//     count++
//     console.log(i);
//     if(count==num){
//         break
//     }
// }
// c=a+b;
// a=b;
// b=c;
// }

// 2) input: Enter no of fib-series: 7
// output: prime numbers in the fib series are: 2 3 5

// 1. print finaci numbers
// 2. print prime numbers in function
// pass the to function to continue iteration to print prime unbers in a fibanoci
function prime(n) {
    if (n > 1) {
        c = 0
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                c++
                return false
            }
        }
        if (c == 0) {
            return true;
        }
    }
}
// here, checking fibanocci by passing function prime to finoci
num = 7;
a = 0;
b = 1;
result = ""
i = 1;
for (i = 1; i <= num; i++) {
    if (prime(a)) {          //passing invoking to function to check peinting num is prime or not, 
        // if it is prime, logs to prime numbers in 7 fibanocii series
        result = result + a + " "
        // console.log(a)

    }
    c = a + b;
    a = b;
    b = c;
}
console.log(result);



/**
 * 1) Write a program to print the smallest unique number 
input: Enter numbers: 5 4 5 3 3 1 2
output: smallest unique is: 1

2) Write a program to print the largest duplicate number
input: Enter numbers: 5 4 5 3 3 1 2
output: Largest duplicate number: 5
 */
























