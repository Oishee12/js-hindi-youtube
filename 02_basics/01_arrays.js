// array 

const myArr = [0, 1, 2, 3, 4, 5] // array declare korar way
// console.log(myArr[0]); 

 const myArr1 = ["Ironman", "Spiderman"] // array declare korar way
// console.log(myArr1[1]);

 const myArr2 = new Array(1, 5, "oishee") // new keyword er madhhome array declare
// console.log(myArr2[2]);


// Array method

 myArr.push(6) // kono value add korar jonno variable er sathe . push() use kora hoy
 myArr.push(8)
 myArr.pop() // variable er sathe .pop()  last value remove kore 

 myArr.unshift(9) // unshift() er vitor j value thake sheta first a add hoy
 myArr.shift() // shift() always first value remove kore

 console.log(myArr.includes(9)); // .includes() er vitor value diye ask kora hoy j value ta array te ache kina, output boolean a show kore that means false or true te show kore
 console.log(myArr.indexOf(9));// .index() er vitor value diye value er maner kono index ache kina ask kora hoy. jodi index thake tobe output a same value dekhabe r jodi na thake tobe output a -1 dekhabe

 const newArray = myArr.join() // .join() array format k string format a output dekhabe
 console.log(myArr); // [0, 1, 2, 3, 4, 5]
 console.log(newArray);// 1, 2, 3, 4, 5

// slice, splice

console.log("A ", myArr); // A [0, 1, 2, 3, 4, 5]

const myNewArray1 = myArr.slice(1, 3) 
console.log(myNewArray1); // [ 1, 2 ] slice a last value include hoyna
console.log("B ", myArr); // A [0, 1, 2, 3, 4, 5] slice korar poro array same thakbe

const myNewArray2 = myArr.splice(1, 3) 
console.log("C ", myArr); // C [ 0, 4, 5 ] splice korar por array change hoy . ekhane range er value gulo r thake na 
console.log(myNewArray2); // [ 1, 2, 3 ] splice a last value include hoy




