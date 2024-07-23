let date = new Date(); //typeof date is an onbject

// console.log(date);
// // output: 2024-07-21T12:24:41.027Z

// we use for better known: it can print IST
// console.log(date.toString());
// // output: Sun Jul 21 2024 17:54:09 GMT+0530 (India Standard Time)

//prints only day, date string day Month Date Year
// console.log(date.toDateString())
// //output: Sun Jul 21 2024

// prints  date and time
// console.log(date.toLocaleString());
// // output: 21/7/2024, 5:56:22 pm

// find specific date

// let mydate = new Date();
// console.log(mydate.getDate()); prints today date


// let mydate = new Date(2025, 0, 22);
// // to print a random date
// console.log(mydate.toDateString());

// let randomDate = new Date(2025, 0, 22);
// console.log(randomDate.toLocaleString());

// to print random date and time

//   year , month(0-11), housr, min, sec
// let dateTime = new Date(2024, 0, 28, 1, 5, 60);
// console.log(dateTime.toLocaleString());


// specific format (yyyy/mm/dd);
// let format = new Date("2024,05,03");
let format = new Date("03-23-2000");
// console.log(format.toLocaleString().toUpperCase());


// time stamps
// let timestamps = Date.now();
// console.log(timestamps); //return milli seconds
// console.log(format.getTime());

// to convert into seconds
// console.log(Math.round(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth());

newDate.toLocaleString(`default`, {
    weekday: "long",
})











