// Print code fibacoci series of number:5
// 0 1 1 2 3 5 8 13 21 35 56
var num=10;
a=0;b=1;i=1;
result="";
if(i<=num)
    {
    // console.log(a);
    result+=a+" ";
    c=a+b;
    b=c;
    a=b;
    i++;
    }
console.log(result);
