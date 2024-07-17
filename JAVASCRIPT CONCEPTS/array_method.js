const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2).flat();
const splicedArray = mergedArray.toSpliced(2, 1, 'a');
const finalArray = splicedArray.slice(1, 5);
console.log(finalArray.includes('a')); // true
console.log(finalArray.indexOf(5)); // 3