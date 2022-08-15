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
    let winner = "";

    if(computerSelection === playerSelection){
        winner = `It's a tie! ${computerSelection} and ${playerSelection}`;

    } else if(computerSelection === "rock" && playerSelection === "paper") {
        winner = "You win! paper beats rock";

    } else if(computerSelection === "rock" && playerSelection === "scissors") {
        winner = "You loose! rock beats scissors";

    } else if(computerSelection === "paper" && playerSelection === "rock") {
        winner = "You loose! paper beats rock";

    } else if(computerSelection === "paper" && playerSelection === "scissors") {
        winner = "You win! scissors beats paper";

    } else if(computerSelection === "scissors" && playerSelection === "rock") {
        winner = "You win! rock beats scissors";

    } else if(computerSelection === "scissors" && playerSelection === "paper") {
        winner = "You loose! scissors beats paper";
    }

    return winner;
}

function game(){
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Schnick, Schnack ..., Schnuck!").toLowerCase();
        if(playerChoice === "rock" || playerChoice === "paper" || playerChoice ==="scissors"){
            const result = play(getComputerChoice(), playerChoice);
            console.log(result);
        
            if(result.includes("You win!")){
                playerScore++;
        
            } else if(result.includes("You loose!")){
                computerScore++;
        
            }

        } else {
            alert("Please choose either rock, paper or scissors!")
            i--;
            
        }
    }

    if(computerScore === playerScore) {
        console.log("It's a tie! Wow, how probable is that?!");

    } else if(computerScore > playerScore){
        console.log(`You loose! ${computerScore} to ${playerScore}`);

    } else if(playerScore > computerScore){
        console.log(`Hurray! You win! ${playerScore} to ${computerScore}`);

    } 
}

game();
