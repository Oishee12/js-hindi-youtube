//  1. Primitive datatype (call by value type)
// it is divided by 7 types:
// *string, *Number, *Boolean, *null(empty), *undefined, *Symbol, *BigInt

//Number
const score = 100
const scorevalue = 100.3
console.log(typeof score);
console.log(typeof scorevalue);

// Boolean
 const isLoggedIn = false
 console.log(typeof isLoggedIn);

// Null
 const outsideTemp = null
 console.log(typeof outsideTemp);

// Undefined
 let userEmail;
console.log(typeof userEmail);

// Symbol
 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id == anotherId);

// BigInt
// const bigNumber = 12355432453n


// 2. Non-primitive(call by referance type)
// Array, Objects, Functions

// Array
 const heros = ["shaktiman", "nagraj", "doga"]
console.log(typeof heros);

// Object
let myObj = {
    name : "Oishee";
    age = 21;
}
console.log(typeof myObj);

// Function
const myFunction(){
    console.log("Hello World");
}
console.log(typeof myFunction);



// /** memory** */
// stack memory use in primitive data type
// heap memory use in non-primitive data type

// stack memory example:

// let myYoutubeName = "hiteshdotcom"
// let anotherName = "myYoutubeName"
// anotherName = "chaiaurcode" 
// console.log(myYoutubeName);
// console.log(anotherName);

// let user1 = {
//     email: "user@gmail.com"
//     upi : "user@ybl"
// }
// let user2 = user1

// user2.email = "hitesh@google.com"

// console.log(user1.email);
// console.log(user2.email);