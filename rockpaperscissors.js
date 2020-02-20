/*
* "initial setting-things-up" section
*/
// =========== leave the below section for now ============
// prompt the user for input, and store their response value into another variable
let userInputtedRPSString = prompt("type your choice: rock, paper, or scissors");

if (userInputtedRPSString === 'rock') {
  alert('user chose rock');
} else if (userInputtedRPSString === 'scissors') {
  alert('user chose scissors');
} else if (userInputtedRPSString === 'paper') {
  alert('user chose paper');
}
// create a variable to store a random number from 1 to 100
let randomFloatingPointNumber = Math.random() * 100;

// a variable to hold a string representing the computer opponents choice
let computersChoice = '';
// =========== leave above section for now ============

/*
* "Computer's choice" section
*/
if (randomFloatingPointNumber < 33) {
  computersChoice = 'rock';
  console.log("computer chose rock");
}
else if (randomFloatingPointNumber > 34 && randomFloatingPointNumber < 67) {
  computersChoice = 'paper';
  console.log("computer chose paper");
}
else if (randomFloatingPointNumber > 67) {
  computersChoice = 'scissors';
  console.log("computer chose scissors");
}

/*
* "see who won" section
*/
// if (userInputtedRPSString = 'scissors') {
//   console.log("user loses");
// }
// if (userInputtedRPSString = 'rock') {
//   console.log('tie');
// }

// exercise 1:
// create an if / else if / else statement to handle the following 3 different cases:
// when randomFloatingPointNumber is between 1-33,
// when randomFloatingPointNumber is between 34 and 66,
// and when randomFloatingPointNumber is between 67 and 100
// you can try to output the value of randomFloatingPointNumber and output a console message in each case to verify your work as needed


// exercise 2:
// INSIDE of each case, set the variable computersChoice to either "rock" "paper" or "scissors" (strings).
// use console.log to get feedback and check your work as much as you want


// exercise 3:
// after your if / else if / else section,
// using the comparison operator (search with ctrl+f for "comparison operator" here: https://www.codecademy.com/articles/glossary-javascript)
// and boolean operators as needed, check if the user's inputted choice beats the computer or not,
// and display a message to the user whether they won or lost the game using alert();
