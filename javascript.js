// initalize variables globally to keep score
var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.random();
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

// function getHumanChoice() {
//     let userInput = prompt("Type an option between: Rock, Paper, Scissors");
//     if (userInput.toUpperCase() === "ROCK") {
//         return "Rock";
//     }
//     else if (userInput.toUpperCase() === "PAPER") {
//         return "Paper";
//     }
//     else if (userInput.toUpperCase() === "SCISSORS") {
//         return "Scissors";
//     }
//     else {
//         return "Incorrect value";
//     }
// }

// function playGame() {

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            return console.log("its a draw");
        }
    
        else if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            return console.log("You lose paper beats rock");
        }
    
        else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore++;
            return console.log("You win rock beats scissors");
        }
    
        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            return console.log("You win paper beats rock");
        }
    
        else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++;
            return console.log("You lose Scissors beats paper");
        }
    
        else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore++;
            return console.log("You Win Scissors beats paper");
        }
    
        else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++;
            return console.log("You lose Rock beats scissors");
        }
    
        else {
            return console.log("invalid input");
        }
    }

    // for (let i=0; i < 5; i++) {
        // const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    // if (humanScore > computerScore) {
    //     console.log("You Win");
    // }

    // else if (humanScore < computerScore) {
    //     console.log("You lose");
    // }

    // else {
    //     console.log("Its a draw");
    // }

// }

// playGame();

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");

rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
})

paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
})

scissorsButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
})