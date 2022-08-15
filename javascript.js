function getComputerChoice(){
    //generate a random number, either 1 or 2 or 3
    let result = Math.floor(Math.random()*3+1);
    switch(result){
        case 1: result = "Rock";
        break;
        case 2: result = "Paper";
        break;
        case 3: result = "Scissors";
        break;
    }
    return result;
}



console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
