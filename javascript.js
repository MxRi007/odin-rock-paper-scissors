function getComputerChoice(){
    //generate a random number, either 1 or 2 or 3
    let result = Math.floor(Math.random()*3+1);
    switch(result){
        case 1: result = "rock";
        break;
        case 2: result = "paper";
        break;
        case 3: result = "scissors";
        break;
    }
    return result;
}

const display = document.querySelector('#display');
const score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

function play(computerSelection, playerSelection){
    if(computerSelection === playerSelection){
        display.textContent = `It's a tie! ${computerSelection} and ${playerSelection}`;

    } else if(computerSelection === "rock" && playerSelection === "paper") {
        display.textContent = "You win! paper beats rock";

    } else if(computerSelection === "rock" && playerSelection === "scissors") {
        display.textContent = "You loose! rock beats scissors";

    } else if(computerSelection === "paper" && playerSelection === "rock") {
        display.textContent = "You loose! paper beats rock";

    } else if(computerSelection === "paper" && playerSelection === "scissors") {
        display.textContent = "You win! scissors beats paper";

    } else if(computerSelection === "scissors" && playerSelection === "rock") {
        display.textContent = "You win! rock beats scissors";

    } else if(computerSelection === "scissors" && playerSelection === "paper") {
        display.textContent = "You loose! scissors beats paper";
    }

    if(display.textContent.includes("You win!")){
        playerScore++;

    } else if(display.textContent.includes("You loose!")){
        computerScore++;

    }
    score.textContent = `Computer: ${computerScore} vs. Player: ${playerScore}`;
    decideMatch(computerScore, playerScore);
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');


btnRock.addEventListener('click', playRock);

function playRock(){
    play(getComputerChoice(), 'rock');
}


btnPaper.addEventListener('click', playPaper);

function playPaper(){
    play(getComputerChoice(), 'paper');
}


btnScissors.addEventListener('click', playScissors);

function playScissors(){
    play(getComputerChoice(), 'scissors');
}


function decideMatch(computerScore, playerScore){
    if(playerScore >= 5 || computerScore >= 5){
        if(computerScore > playerScore){
            display.textContent = `You loose! ${computerScore} to ${playerScore}`;
    
        } else {
            display.textContent = `Hurray! You win! ${playerScore} to ${computerScore}`;
        }

        btnRock.removeEventListener('click', playRock);
        btnPaper.removeEventListener('click', playPaper);
        btnScissors.removeEventListener('click', playScissors);

    }


}
