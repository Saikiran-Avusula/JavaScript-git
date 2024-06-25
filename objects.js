// we can creation can be done in 4 ways
// 1. object literal  

// it follows the alpabetical order
// here, to access objects we use propeties called "Key: value pairs;
let movie={
    name:"gangs of godavari",
    date: 2024,
    director: "telidu avaro..?",
}
movie.artist="nani";
movie.name="hi nana";
console.log(movie["date"]); //1. by using sqaure brackets notation, using "key" we can access it's value 
console.log(movie.date); //2. by using ""."notation, using "key" we can access it's value 
console.log(movie.date); // we get with override data 

// here, in array we ca access it values by using index.
// a=["RRR", 2022, "Rajamouli"];
//  console.log(a[2]);

// 2. using a new keyword with object constructor

// let movie1 = new Object;
// here,
// new is keyword
// object is object constructor
// movie1 is variable declaration

let movie1 = new Object;
{
    movie1.name="Hi Nana",
    movie1.hero="Nani",
    movie1.r_date=2022
    // movie1.r_director="AMo telidu"
    movie1["r_director"]="AMo telidu"
}
console.log(movie1);

// 3. Using new operator with constructor function
// here, we have to create a template to access every user to print
// it can be created using the function
// "this"-->keyword is used to create the user deatils

// step 1 
function user(name,age,place){
    this.name=name,
    this.age=age,
    this.place=place
}
// now, a template is created to access we can print n number of user by using it
// by passing function arguments to function parameters

// step2
// create object ith constructor function call 
let user1= new user("sai", 24, "hyd")
user1.mobile=123456; //add new key-value pair into user1
console.log(user1);

// 4. object.create method
// it inherits object name to newly created object
// As, it is using exisiting object as prototype of the newly created object 
var user1 = {
    name: "Hi nana",
    hero: "Nani",
    year: 20222,
    info: function () {
      console.log("Name:", this.name);
      console.log("Hero:", this.hero);
    }
  };
  var user2 = Object.create(user1); 
  // console.log(user2); //here, we created clone or
  //  inherited structure fro movie1 using movie object_name
  user2.name = "RRR";
  user2.movie = "NTR";
  user2.info()
  console.log(user2);

