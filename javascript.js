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

function play(computerSelection, playerSelection){
    playerSelection = playerSelection.toLowerCase();
    
    let winner = "";

    if(computerSelection === playerSelection){
        winner = `It's a tie! ${computerSelection} and ${playerSelection}`;

    } else if(computerSelection === "rock" && playerSelection === "paper") {
        winner = "Your win! Paper beats Rock";

    } else if(computerSelection === "rock" && playerSelection === "scissors") {
        winner = "Your loose! Rock beats Scissors";

    } else if(computerSelection === "paper" && playerSelection === "rock") {
        winner = "Your loose! Paper beats Rock";

    } else if(computerSelection === "paper" && playerSelection === "scissors") {
        winner = "Your win! Scissors beats Paper";

    } else if(computerSelection === "scissors" && playerSelection === "rock") {
        winner = "Your win! Rock beats Scissors";

    } else if(computerSelection === "scissors" && playerSelection === "paper") {
        winner = "Your loose! Scissors beats Paper";
    }

    return winner;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
