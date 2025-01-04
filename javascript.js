// initalize variables to keep score
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.random() * 1;
    if (randomNum >= 0.66) {
        return "Rock";
    }
    else if (randomNum >= 0.33) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
    
}

console.log(getComputerChoice());

function getHumanChoice() {
    let userInput = prompt("Choose a number 1: Rock, 2: Paper, 3: Scissors");
    if (userInput === "1" || userInput === "3" || userInput === "3" ) {
        return console.log(userInput);
    }
    else {
        return console.log("Not a correct value");
    }
}

getHumanChoice();
