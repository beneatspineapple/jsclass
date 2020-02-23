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
if (computersChoice == 'rock') {

  if (userInputtedRPSString == 'rock') {
    console.log("tie");
  }
  else if (userInputtedRPSString == 'scissors') {
    console.log("computer wins");
  }
  else if (userInputtedRPSString == 'paper') {
    console.log("user wins");
  }

}//end of computer chose "rock" case.


// computer chose "scissors" case:
if (computersChoice == 'scissors' && userInputtedRPSString == 'scissors') {
  console.log("tie");
}
else if (computersChoice == 'scissors' && userInputtedRPSString == 'paper') {
  console.log("computer wins");
}
else if (computersChoice == 'scissors' && userInputtedRPSString == 'rock') {
  console.log("user wins");
}


// computer chose "paper" case:
if (computersChoice == 'paper' && userInputtedRPSString == 'paper') {
  console.log("tie");
}
else if (computersChoice == 'paper' && userInputtedRPSString == 'rock') {
  console.log("computer wins");
}
else if (computersChoice == 'paper' && userInputtedRPSString == 'scissors') {
  console.log("user wins");
}