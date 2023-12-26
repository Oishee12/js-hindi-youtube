const name = "Hitesh"
const repoCount = 50

//console.log(name + repoCount + "value"); // evabe lekha uchit na

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // evabe lekha uchit

const gameName = new String(`hitesh-hc-com`)
 
//Syntax => console.log(gameName._proto_);
console.log(gameName[0]); // index er letter dekhar jonno

console.log(gameName.charAt(2)); // index er letter dekhar jonno

console.log(gameName.length); // string length dekhanor jonno

console.log(gameName.toUpperCase()); // all word uppercase bananor jonno

console.log(gameName.indexOf('t')); // letter er index dekhar jonno

const newString = gameName.substring(0,4)
console.log(newString); // substring dekhar jonno

const anotherString = gameName.slice(-8,4)
console.log(anotherString); // reverse substring dekhar jonno

const newString1 = "    hitesh   "
console.log(newString1);
console.log(newString1.trim()); // space remove kore 

const url = "https:hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-')); // replace korar jonno

console.log(url.includes('sundar')); // pattern ache kina dekhar jonno

console.log(gameName.split('-')); // bracket er vitor ja thakbe she 





