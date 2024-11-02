console.log("Hello Wolrd");

let hand = ['rock', 'paper', 'scissor']
let computerChoice;
let userChoice;
let wins = 0;
let losses = 0;

function randomComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    computerChoice = hand[randomNum];
    return computerChoice;
}

function playGame(userInput){
    userChoice = userInput;
    if(userInput == computerChoice) {
        return ('You played the same choice play again!');
    } else if (userInput === 'rock' && computerChoice === 'paper'){
        losses++;
        return'You lost!';
    } else if (userInput === 'rock' && computerChoice === 'scissor'){
        wins++;
        return 'You won!';
    } else if (userInput === 'paper' && computerChoice === 'rock'){
        wins++;
        return 'You won!';
    } else if (userInput === 'paper' && computerChoice === 'scissor'){
        losses++;
        
        return 'You lost!';
    } else if (userInput === 'scissor' && computerChoice === 'paper'){
        wins++;
        return 'You lost!';
    } else if (userInput === 'scissor' && computerChoice === 'rock'){
        losses++;
        return 'You lost!';
    } else {
        return `${userInput} is an invalid input`  ;
    }
}

randomComputerChoice();


console.log(playGame('rock'), `You played: ${userChoice}, the computer played: ${computerChoice} the tally is ${wins} wins and ${losses}`);