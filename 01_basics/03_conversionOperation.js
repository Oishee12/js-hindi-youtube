let score = "33"

console.log(typeof score); // score ki dhoroner datatype sheta dekhar jonno 
console.log(typeof (score)); // score ki dhoroner datatype sheta dekhar jonno

let valueInNumber = Number(score)  //ager string k number a convert korbe
console.log(typeof valueInNumber);
console.log(valueInNumber);

// null to number
let scor = null
console.log(typeof scor);
let valueInNmber = Number(scor)
console.log(typeof valueInNmber);
console.log(valueInNmber);

// string to number
let scor ="Hitesh"
console.log(typeof scor);
let valueInNmber = Number(scor)
console.log(typeof valueInNmber);
console.log(valueInNmber);

//anything => number conversion
//33 => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//boolean conversion
// 1 => true; 0 => false
// "" => false
// "Hitesh" => true

