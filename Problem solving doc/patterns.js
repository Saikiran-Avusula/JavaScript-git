// let string="";
// for (var i=1;i<=5;i++)
//   {
//     for(var j=1;j<i;j++)
//       {
//         string+="* ";
//       }
//     string+="* \n";
//   }
//   console.log(string);

// let string="";
// for(var i=1;i<=5;i++) //for rows
//   {
//     for(var j=1;j<=5;j++) //for colunms
//       {
//       string+="* ";
//       }
//       string+="*\n"
//     }
//     console.log(string);
// for square 

// let string="";
// for(var i=1;i<=5;i++) //for rows
//   {
//     for(var j=1;j<i;j++) //for colunms
//       {
//       string+="* ";
//       }
//       string+="*\n"
//     }
//     console.log(string);
// for left angle triangle

// let string="";
// let n=5;
// for(var i=1;i<=5;i++) //for rows
//   {
//     for(var j=1;j<=n-i;j++) //for colunms
//       {
//       string+="* ";
//       }
//       string+="*\n"
//     }
//     console.log(string);
// top left angle triangle

// let string="";
// // let n=5;
// for(var i=0;i<=5;i++){
//   for(var j=0;j<i;j++)
//     {
//       string+="* ";
//     }
//     string+="* \n";
//     console.log(string);---> here, becasue inside the for of i loop for evey step, * will print, by this every step it will prints same output
//* 

// * 
// * * 

// * 
// * * 
// * * * 

// * 
// * * 
// * * * 
// * * * *

// *
// * *
// * * *
// * * * *
// * * * * *

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * * 
// }
// here, we print left angle triangle step by step here,

// console.log(string); //---> here, becasue ousideside the for of i loop , * will print, only one time as complete pattern
// along we tool i=0, j=0 so, prints 6 rows and 6 columns
// * 
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// but when we try to give print complete outside the loops, strings holded pattern will be printed only one time.

//  let string="";
// let n=5;
// for(var i=0;i<=5;i++){
//   for(var j=0;j<i;j++){
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }


// built using technics , left angle triangle.
// var n=5;
// for(var i=1;i<=n;i++)
//   {
//       for(var j=1;j<=i;j++)
//         {
//           process.stdout.write("* ");
//         }
//     process.stdout.write("\n")    
//   }

// print to primid pattern using stars
var n=5;
for(i=1;i<=n;i++)
  {
    for(s=1;s<=n-i;s++){
      process.stdout.write(" ");
    }
    for(j=1;j<=i*2-1;j++)
      {
        process.stdout.write("*");
      }
    process.stdout.write("\n")  
  }


