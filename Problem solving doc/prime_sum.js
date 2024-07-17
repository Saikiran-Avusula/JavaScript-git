var num= 163382;
var store=String(num)
add=0;
for(i of store){
count=0;
if(i>1){
for(j=2;j<i;j++){
    if(i%j==0){
        count++
        break
    }
}
if(count==0){
    add=add+Number(i) // total number i string type
}
}
}
console.log(add)