// constructor (this key )
//Now, we dealing class objects
// function Dog() {
//     this.color = "black";
//     this.name = "sunny"; //here, we used this. as keyword , for invoking object by new constructor objectname
// }
// console.log(new Dog());//new "keyword", Dog "object constrctor"
// let dog1 = new Dog();
// console.log(dog1);

// NOw, i dymically want to declar names i my required
// function Dog(color, name) {
//     this.color = color; //property with parameter
//     this.name = name;
//     this.bark = function () {
//         console.log(this.name + " is barking");
//     }
// }
// let dog1 = new Dog("black", "Tommy");
// let dog2 = new Dog("white", "john");
// // console.log(dog1, dog2); //to print dynamic properties

// //i need only color & name of dog
// // console.log(dog1.color);
// // console.log(dog2.name);

// console.log(dog1);
// dog1.bark(); //calling function of Dog



// console.log(new Dog()); //output undefined because, we passed parameters to the variable to declar properties of constructor dynamically


/////////////////////////////////////////
// class 

// class Dog {  //template created
//     constructor() //it initialises properties
//     {
//         console.log("constructor actived...!");
//         this.color = "white";
//         this.name = "tommy";
//         // console.log(this); backuo template stored in this keyword
//     }
// }
// let dog1 = new Dog() //new keywords invokes constructor keyword
// console.log(dog1);

// class Dog {  //template created
//     constructor(color, name) //it initialises properties
//     {
//         console.log("kaka constructor actived...!");
//         this.color = color;
//         this.name = name;
//         // console.log(this); backuo template stored in this keyword
//     }
// }

// //so nuvu dynamic propeties reference varible ki assign chesina prathi sari constructoe invoke avuthadi 
// let dog1 = new Dog("pink", "sweety");
// // console.log(dog1);

// // let dog2 = new Dog("white", "Cutty");
// // console.log(dog2);
// dog1.breed = "german" //manually created dog1 new property  by using template class
// // console.log(dog1.name);
// console.log(dog1);


// without constrctor
//class based object, alredy defined with Dog 
// by default there will be constructor, only invokes 
//remember only one constrcutor can be assigned
// class Dog {
//     name;
//     color;
//     constructor(name, color) {
//         console.log("default contsrctor invoked");
//         this.name = name;
//         this.color = color;
//     }
//     barking() {
//         console.log(this.name + " is barking");
//     }
// }

// // console.log(new Dog());
// let german = new Dog("brown", " German");
// console.log(german);
// german.barking();


let d = new Date();
console.log(d);

