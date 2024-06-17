//   var n=5;
// for(i=1;i<=n;i++)
//   {
//     for(s=1;s<=i;s++){
//       process.stdout.write(" *");
//     }

//     process.stdout.write("\n")  
//   }

var n=5;
for(i=1;i<=n;i++)
  {
    for(s=1;s<=n-i;s++){
      process.stdout.write(" ");
    }
    for(j=1;j<=i;j++)
      {
        process.stdout.write("*");
      }
    process.stdout.write("\n")  
  }