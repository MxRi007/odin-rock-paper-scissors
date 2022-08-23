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
    return display.textContent;
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

let playerScore = 0;
let computerScore = 0;




btnRock.addEventListener('click', () => {
    let result = play(getComputerChoice(), 'rock');
    if(result.includes("You win!")){
        playerScore++;

    } else if(result.includes("You loose!")){
        computerScore++;

    }
    score.textContent = `Computer: ${computerScore} vs. Player: ${playerScore}`;

    if(playerScore === 5 || computerScore === 5){
        if(computerScore > playerScore){
            display.textContent = `You loose! ${computerScore} to ${playerScore}`;
    
        } else {
            display.textContent = `Hurray! You win! ${playerScore} to ${computerScore}`;
        } 
    }
});

    

btnPaper.addEventListener('click', ()=>{
    let result = play(getComputerChoice(), 'paper');
    if(result.includes("You win!")){
        playerScore++;

    } else if(result.includes("You loose!")){
        computerScore++;

    }
    score.textContent = `Computer: ${computerScore} vs. Player: ${playerScore}`;

    if(playerScore === 5 || computerScore === 5){
        if(computerScore > playerScore){
            display.textContent = `You loose! ${computerScore} to ${playerScore}`;
    
        } else {
            display.textContent = `Hurray! You win! ${playerScore} to ${computerScore}`;
        } 
    }
});

btnScissors.addEventListener('click', () => {
    let result = play(getComputerChoice(), 'scissors')
    if(result.includes("You win!")){
        playerScore++;

    } else if(result.includes("You loose!")){
        computerScore++;

    }
    score.textContent = `Computer: ${computerScore} vs. Player: ${playerScore}`;

    if(playerScore === 5 || computerScore === 5){
        if(computerScore > playerScore){
            display.textContent = `You loose! ${computerScore} to ${playerScore}`;
    
        } else {
            display.textContent = `Hurray! You win! ${playerScore} to ${computerScore}`;
        } 
    }
});



/* function game(){


    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Schnick, Schnack ..., Schnuck!").toLowerCase().trim();
        
        else {
            alert("Please choose either rock, paper or scissors!")
            i--;

        }
    }


}

game(); */
