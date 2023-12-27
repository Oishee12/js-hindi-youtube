const score = 400
console.log(score);

const balance = new Number(100) //new Number bolar karone output a datatype show hoiche
console.log(balance);

console.log(balance.toString()); //string a convert hoyeche

console.log(balance.toFixed(2)); //decimal place fixed

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));//shuru theke 3 ta number show korbe

const otherNumber1 = 123.8966
console.log(otherNumber1.toPrecision(3));//shuru theke 3 ta number show korbe

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // boro songkha'r majhe koma dey . *toLocaleString() => American standard
console.log(hundreds.toLocaleString('en-IN')); // boro songkha'r majhe koma dey . *toLocaleString('en-IN') => Indian standard



//********MATHS**************** */
console.log(Math);
console.log(Math.abs(-4)); // abs shongkha k positive banay
console.log(Math.round(4.3)); // 4.3 thakle er round figure hobe 4. 
console.log(Math.round(4.7)); //  4.7 hole er round figure hobe 5 
console.log(Math.ceil(4.2)); 
console.log(Math.floor(4.9)); 
console.log(Math.min(3, 4, -5, 1));
console.log(Math.max(3, 4, -5, 1));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min);




