// // Boolean data type variables
// let lateToWork = true;
// let hasSnacks = true;
// let isRaining = false;
// let isWednesday = true;
// let gettingOutEarly = false;
//
// // integer data type variables
// let myAge = 37;
//
// // string data type
// let myBossesName = 'Sam';



// exercises: write an if-statement for each of the following, using the above variables.

// example: "write an if-statement that outputs something to the console if it's wednesday and you're late to work"
// if (isWednesday && lateToWork) {
//   console.log("it is wednesday, and you're late to work!");
// }
//=================================

// exercise 1. "write an if-statement that outputs something to the console if you are late to work and have snacks"
let lateToWork = true;
let haveSnacks = true;

if (lateToWork && haveSnacks) {
  console.log ("you are late for work, and have snacks");
}

//=================================


//exercise 2. write an if-statement that outputs something when its either wednesday or it's raining

let wednesday = true;
let raining = false;

if (wednesday || raining) {
  console.log ("if it's raining or it's wednesday")
}

//=================================


//exercise 3. write an if-statement that outputs something when its NOT raining

let raining2 = false;

if (!raining2) {
  console.log ("it's not raining")
}

//=================================


//exercise 4. write an if-statement that outputs "You are old!" if myAge is greater than 37, otherwise it outputs "you're still young!"

let age = 37;

if (age > 37) {
  console.log ("You are old!")
}

if (age < 37) {
  console.log ("you're still young")
}

if (age = 37) {
  console.log ("you're 37")
}
