function playRPS(){

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

  /*
   * "declare and initialize the variables we need" section:
   */
  let userWonTheGame = false;
  let userTiedTheGame = false;

  /*
   * "Computer's choice" section:
   */
  if (randomFloatingPointNumber < 33) {
    computersChoice = 'rock';
  }
  else if (randomFloatingPointNumber > 34 && randomFloatingPointNumber < 67) {
    computersChoice = 'paper';
  }
  else if (randomFloatingPointNumber > 67) {
    computersChoice = 'scissors';
  }

  /*
   * "see who won" section:
   */
  // computer chose "rock" case:
  if (computersChoice == 'rock') {
    if (userInputtedRPSString == 'rock') {
      // console.log("tie");
      userTiedTheGame = true;
    }
    else if (userInputtedRPSString == 'paper') {
      // console.log("user wins");
      userWonTheGame = true;
    }
  }

  // computer chose "scissors" case:
  if (computersChoice == 'scissors') {
    if (userInputtedRPSString == 'scissors') {
      userTiedTheGame = true;
    }
    else if (userInputtedRPSString == 'rock') {
      // console.log("user wins");
      userWonTheGame = true;
    }
  }

  // computer chose "paper" case:
  if (computersChoice == 'paper') {
    if (userInputtedRPSString == 'paper') {
      userTiedTheGame = true;
    }
    else if (userInputtedRPSString == 'scissors') {
      userWonTheGame = true;
    }
  }

  if (userWonTheGame == true) {
    console.log( "You won!: "+ userWonTheGame );
  }
  else if (userWonTheGame == false) {
    console.log( "You lost!: "+ userWonTheGame );
  }
  if (userTiedTheGame == true) {
    console.log( "Tie: "+ userTiedTheGame );
  }
}

