

// function double(x) {
//     return x.toString(2);
// }
// const result = arr.map(double);
// console.log(result);

// const result = arr.map((x) => {
//     x * 2;
// })
// console.log("doubled: ", result);

// const res = arr.map((x) => {
//     return (x + 2)
// })
// console.log(("+1 to num: ", res));
// const arr = [8, 3, 4, 5];

// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log("function sum: ", arrSum(arr));


// const op = arr.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log("reduce function sum is: ", op);

// function arrMax(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         return max;
//     }
// }
// console.log(arrMax(arr));

// const op = arr.reduce((max, curr) => {
//     if (curr > max) {
//         max = curr;
//     }
//     return max;
// }, 0);
// console.log(op);

const users = [
    { fname: "akshay", lname: "saini", age: 26 },
    { fname: "donald", lname: "trump", age: 75 },
    { fname: "elon", lname: "musk", age: 50 },
    { fname: "deepika", lname: "padukone", age: 26 },
];

//list of full name ;
// console.log(typeof users);
// const op = users.map(x => x.fname + " " + x.lname)
// console.log(op);

//how many users 26: 2, 75: 1 , 50: 1
const op = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1; //1 initially is not prsent double
    }
    return acc;

}, {});
// console.log(op);

//find objects age less than 30
// find fnames of people

// used filter and map
// const output = users.filter(x => x.age < 30)
//     .map((x) => x.fname);
// console.log(output);

const output = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc = acc + curr.fname + " ";
    }
    return acc;
}, [])
console.log(output)
