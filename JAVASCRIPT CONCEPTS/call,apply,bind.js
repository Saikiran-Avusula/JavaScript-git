// call, apply, bind concepts\



// 1. call() Method
// let name = {
//     firstName: 'Rahul',
//     lastName: 'Sharma',
//     printFullName: function () {
//         console.log(this.firstName + ' ' + this.lastName);
//     }
// }

// let name2 = {
//     firstName: 'Akshay',
//     lastName: 'Kumar',
//     printFullName: function () {
//         console.log("this is name2: ", this.firstName + ' ' + this.lastName);
//     }
// }
// name.printFullName();
// name2.printFullName();

// output:
// Rahul Sharma
// this is name2:  Akshay Kumar



// every time we have to log the second object to print as like first object
// we can print the second object by using reference of first object.

// here, our moto to print fullname of second object without using console.log it
// can be performed by using call() method
// here comes call() into picture
// 1.take a name of refrence object to print fullname.
// name.printFullName
// 2. now, take call() method along with name.printFullName
// name.printFullName.call()
// 3. now, take the second object name2 as parameter
// name.printFullName.call(name2);
// 4. now, we can print the fullname of second object by using call() method



// let dog = {
//     name: "tommy",
//     color: "white",
//     printDog: function () {
//         console.log(this.name + " is " + this.color)
//     }
// }
// let dog2 = {
//     name: "puppy",
//     color: "brown",
// }
// dog.printDog.call(dog2); //browwed function from other methods

// for reusability we don't keep console log in a object
// we take out those object assigned with function

// let printDog = function () {
//     console.log(this.name + " is " + this.color)
// }

// let dog = {
//     name: "tommy",
//     color: "white",
// }
// printDog.call(dog);

// let dog2 = {
//     name: "puppy",
//     color: "brown",
// }
// printDog.call(dog2);

// output:
// tommy is white
// puppy is brown

// what if we pass arguments to function?
// we can pass arguments to function

// let printDog = function (place) {
//     console.log(this.name + " is " + this.color + " from " + place)
// }

// let dog = {
//     name: "tommy",
//     color: "white",
// }
// // 1. in call() method always for reference variable,
// // 2. Remian to passing arguments with separated with cooma(,)
// printDog.call(dog, "Banswada");

// let dog2 = {
//     name: "puppy",
//     color: "brown",
// }
// printDog.call(dog2, "hyderbad");

// output:
// tommy is white from Banswada
// puppy is brown from hyderbad

// 2. apply() method

// In apply() we pass the arguments in an arraylist that !
//apply(reference, [arguments,arguments]) within arraylist havingcomma separated.

// wereas in call(reference, arguments, arguments) : with comma separeted

// example

// const product = {
//     name: "Mobile",
//     brand: "apple",
// }

// let print = function (place) {
//     console.log(this.name + " is " + this.brand + " from " + place)
// }

// print.apply(product, ["USA"])

// output: Mobile is apple from USA

// 3. bind() method
// It used for keep copy is a method later can be invoked
// It is just like call()

// let person = {
//     name: "Sai",
//     style: "smart"
// }

// let print = function () {
//     console.log(this.name + " is " + this.style)
// }

// let store = print.bind(person);
// store(); //invoked just like normal method

// // output: Sai is smart




