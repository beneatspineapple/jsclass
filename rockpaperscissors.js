/*
 * "initial setting-things-up" section
 */
// =========== leave the below section for now ============
// prompt the user for input, and store their response value into another variable
let userInputtedRPSString = prompt("type your choice: rock, paper, or scissors");

// create a variable to store a random number from 1 to 100
let randomFloatingPointNumber = Math.random() * 100;

// a variable to hold a string representing the computer opponents choice
let computersChoice = '';
// =========== leave above section for now ============
let userWonTheGame = false;
/*
 * "Computer's choice" section
 */
if (randomFloatingPointNumber < 33) {
  computersChoice = 'rock';
  console.log("computer chose rock");
} else if (randomFloatingPointNumber > 34 && randomFloatingPointNumber < 67) {
  computersChoice = 'paper';
  console.log("computer chose paper");
} else if (randomFloatingPointNumber > 67) {
  computersChoice = 'scissors';
  console.log("computer chose scissors");
}

/*
 * "see who won" section
 */
// computer chose "rock" case:
// if (computersChoice == 'rock') {
// let userWonTheGame == false;
if (computersChoice == 'rock') {
  if (userInputtedRPSString == 'rock') {
    // console.log("tie");
  }
  else if (userInputtedRPSString == 'scissors') {
    // console.log("computer wins");

  }
  else if (userInputtedRPSString == 'paper') {
    // console.log("user wins");
userWonTheGame = true;
  }

}//end of computer chose "rock" case.


// computer chose "scissors" case:
if (computersChoice == 'scissors') {
  if (userInputtedRPSString == 'scissors') {
      // console.log("tie");
  }
  else if (userInputtedRPSString == 'paper') {
      // console.log("computer wins");
  }
  else if (userInputtedRPSString == 'rock') {
      // console.log("user wins");
userWonTheGame = true;
  }

}//end of computer chose "scissors" case.

// computer chose "paper" case:
if (computersChoice == 'paper') {
  if (userInputtedRPSString == 'paper') {
      // console.log("tie");
  }
  else if (userInputtedRPSString == 'rock') {
      // console.log("computer wins");
  }
  else if (userInputtedRPSString == 'scissors') {
      // console.log("user wins");
userWonTheGame = true;
  }

}//end of computer chose "paper" case.

console.log( "User won: "+ userWonTheGame );
