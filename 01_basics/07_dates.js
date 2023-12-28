//Dates

let myDate = new Date()
console.log(myDate.toString()); //properly date dekhar jonno

//some other method
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

let mycreatedDate = new Date(2023, 0, 23) // single digit a 0 k jan dhora hoy
console.log(mycreatedDate.toDateString()); // Mon Jan 23 2023

let mycreatedDate1 = new Date(2023, 0, 23, 5, 3) // user defined date dekhte chaile
console.log(mycreatedDate1.toLocaleString()); // 1/23/2023 5:03:00 AM  *time dekhte chaile ei object use krte hbe

let mycreatedDate2 = new Date("2023-01-14")
console.log(mycreatedDate2.toLocaleString()); // 1/14/2023 12:00:00 AM

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

/* control space press korle onek recommended property dekhay*/