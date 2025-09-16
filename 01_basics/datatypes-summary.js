// Primitive datatypes
// String, Boolean, Number, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = true;
const numberAvailable = null;
//console.log(typeof numberAvailable);
//Note : typeof null is object not null.

const username = "ajay";

const id = Symbol('123');
const anotherId = Symbol('123');
//console.log(id === anotherId);
//console.log(typeof anotherId);

const bigNumber = 34567777617498704580n;
//console.log(typeof bigNumber);

//Reference (non-primitive)
//Arrays, Object , Function

const superHeros = ["Batman" , "Spiderman", "Goku"]
//console.log(superHeros);
console.log(typeof superHeros);
//console.log(Array.isArray(superHeros));

let boy = {
    name: "Akash",
    age: 17,
    adult: false
}
console.log(typeof boy)

//console.log(boy.name)
//console.log(boy.age)
//console.log(boy.adult)
//console.log(typeof boy.adult)

myFunction = function(){
    console.log("hello Human!")
}
console.log(myFunction);