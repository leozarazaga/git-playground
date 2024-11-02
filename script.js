console.log("Hello Wolrd");
console.log("Let's get started");

let hand = ["rock", "paper", "scissor"];
let computerChoice;
let userChoice;
let wins = 0;
let losses = 0;

/* function randomComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    computerChoice = hand[randomNum];
    return computerChoice;
} */

/* function playGame(userInput) {
  userChoice = userInput;
  if (userInput == computerChoice) {
    return "You played the same choice play again!";
  } else if (userInput === "rock" && computerChoice === "paper") {
    losses++;
    return "You lost!";
  } else if (userInput === "rock" && computerChoice === "scissor") {
    wins++;
    return "You won!";
  } else if (userInput === "paper" && computerChoice === "rock") {
    wins++;
    return "You won!";
  } else if (userInput === "paper" && computerChoice === "scissor") {
    losses++;

    return "You lost!";
  } else if (userInput === "scissor" && computerChoice === "paper") {
    wins++;
    return "You lost!";
  } else if (userInput === "scissor" && computerChoice === "rock") {
    losses++;
    return "You lost!";
  } else {
    return `${userInput} is an invalid input`;
  }
} */

randomComputerChoice();

//console.log(playGame("rock"), `You played: ${userChoice}, the computer played: ${computerChoice} the tally is ${wins} wins and ${losses}`);


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// BETA II - TESTING GAME LOGIC & SCORE
// DELETE ME... 🗑

function randomComputerChoice() {
  let randomNum = Math.floor(Math.random() * hand.length);
  return hand[randomNum];
}

function checkGameWinner() {
  if (wins === 3) {
    return "👤 User wins!";
  } else if (losses === 3) {
    return "🤖 Computer wins!";
  }
}

//I guess this must be inside a while-loop for the user to be able to play several times.
function playGame(userInput) {
  userChoice = userInput;
  computerChoice = randomComputerChoice();
  checkGameWinner();

  if (computerChoice === userInput) {
    return "You played the same choice";
  } else if (
    (userInput === "rock" && computerChoice === "scissor") ||
    (userInput === "scissor" && computerChoice === "paper") ||
    (userInput === "paper" && computerChoice === "rock")
  ) {
    wins++;
    return "You won!";
  } else {
    losses++;
    return "You loose!";
  }
}

// randomComputerChoice();
console.log(playGame("rock"),`\nYou played: ${userChoice}, the computer played: ${computerChoice}. \nThe tally is ${wins} wins and ${losses} losses.`);