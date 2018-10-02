
////////////////////////
//////FIRST METHOD//////
////////////////////////




var firstName = prompt("What is your first name? ").toLowerCase();
var lastName = prompt("What is your last name? ").toLowerCase();
var age = prompt("Enter your age in years:");
var height = prompt("Enter your height in cms:");
var pet = prompt("What is your pet name? ");
var len = pet.length


if (firstName[0] === lastName[0] && age < 30 && age > 20 && height >= 170 && pet[len-1] === "y" ) {
  console.log("Hola spy")
}else {
  console.log("Who are you?");
}

// if (firstName[0] === lastName[0] ) {
//   console.log("Hola spy")
// }else {
//   console.log("No spy");
// }
// if (age <= 30 && age >= 20) {
//   console.log("Hola spy");
// }else {
//   console.log("No spy");
// }
//
// if (height >= 170) {
//   console.log("Spy");
// }else {
//   console.log("NN spy");
// }

// if (pet[len-1] === "y") {
//   console.log("Spy");
// }else {
//   console.log("NN spy");
// }


// .toLowerCase() IS ADDED COZ IF A PERSON ENTERS FIRST NAME IN CAPS AND SECOND NAME IN LOWERCASE THE PROGRAM WILL NOT DO ANY GOOD

/////////////////////////
//////SECOND METHOD//////
/////////////////////////


// var firstName = prompt("What is your first name? ").toLowerCase();
// var lastName = prompt("What is your last name? ").toLowerCase();
// var age = prompt("Enter your age :");
// var height = prompt("Enter your height :");
// var pet = prompt("What is your pet name? ");
//
// var nameCond = null;
// var ageCond = null;
// var heightCond = null;
// var petCond = null;
//
// if (firstName[0] === lastName[0]) {
//   nameCond = true;
// }else {
//   nameCond = false;
// }
//
// if (age < 30 && age > 20) {
//   ageCond = true;
// }else {
//   ageCond = false;
// }
//
// if (height >= 170) {
//   heightCond = true;
// }else {
//   heightCond = false;
// }
//
// if (pet[pet.length-1]) {
//   petCond = true;
// }else {
//   petCond = false;
// }
//
// if (nameCond && ageCond && heightCond && petCond) {
//   console.log("Hello Spy");
// }else {
//   console.log("Who are you?");
// }
