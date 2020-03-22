function playNGamesOfRPS(numOfGame){
    for (let i = 0; i < numOfGame; i++) { //++ is increment operator (natural counting, add one)
        playRPS();
    }
}

function chooseRPOrS(){
    // a variable to hold a string representing the computer opponents choice
    let computersChoice = '';

    // create a variable to store a random number from 1 to 100
    let randomFloatingPointNumber = Math.random() * 100;

    /*
    * "Computer's choice" section:
    */
    if
    (
        randomFloatingPointNumber < 33
    ) {
        computersChoice = 'rock';
    }
    else if
    (
        randomFloatingPointNumber > 34
        &&
        randomFloatingPointNumber < 67
    ) {
        computersChoice = 'paper';
    }
    else if (randomFloatingPointNumber > 67) {
        computersChoice = 'scissors';
    }

    return computersChoice;
}

// function user1RPSGameResult
// parameters: player1choice, player2choice: they are both strings that accept "rock" "paper" or "scissors"
// returns an array in this format:
// [ [1 if player 1 wins, otherwise 0],[1 if player 1 loses, otherwise 0], [1 if user 1 ties, otherwise  0] ]
function user1RPSGameResult(player1choice, player2choice){

    /*
      * "declare and initialize the variables we need" section:
      */
    // the default return object of this function:
    let gameResults = [0,0,0];
    let player1WonTheGame = false;
    let player1TiedTheGame = false;

    // debug our function inputs:
    console.log("user1RPSGameResult function entered with p1: "+player1choice+" vs. p2: "+player2choice);

    // player1choice chose "rock" case:
    if (player1choice == 'rock') { // this is called a boolean expression inside the parentheses because it always evaluates to true or false
        if (player2choice == 'rock') {
            // console.log("tie");
            player1TiedTheGame = true;
        }
        else if (player2choice == 'paper') {
            // console.log("user wins");
            player1WonTheGame = true;
        }
    }

    // player1choice chose "scissors" case:
    if (player1choice == 'scissors') {
        if (player2choice == 'scissors') {
            player1TiedTheGame = true;
        }
        else if (player2choice == 'rock') {
            // console.log("user wins");
            player1WonTheGame = true;
        }
    }

    // player1choice chose "paper" case:
    if (player1choice == 'paper') {
        if (player2choice == 'paper') {
            player1TiedTheGame = true;
        }
        else if (player2choice == 'scissors') {
            player1WonTheGame = true;
        }
    }

    //TODO:
    // Implement array exercise here in these if-cases to return the correct gameResults array
    if (player1WonTheGame == true) {
        console.log( "player1 won! " );
    }
    else if (player1WonTheGame == false) {
        console.log( "player 1 lost! " );
    }

    if (player1TiedTheGame == true) {
        console.log( "Tie! " );
    }


    return gameResults;
}

function playRPS(){
    // prompt the user for input, and store their response value into another variable
    let userInputtedRPSString = prompt("type your choice: rock, paper, or scissors");

    // a variable to hold a string representing the computer opponents choice
    let computersChoice = chooseRPOrS();


    /*
    * "see who won" section:
    */
    let resultArray = user1RPSGameResult(userInputtedRPSString, computersChoice);
    console.log("resultArray is: "+resultArray);

}
