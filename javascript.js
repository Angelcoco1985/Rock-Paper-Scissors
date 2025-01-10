var humanScore = 0;
var computerScore = 0;

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        let finalScoreUpdate = document.createElement("li");
        if (humanScore > computerScore) {
            finalScoreUpdate.textContent = "Congrats you win";
            divDisplayResults.appendChild(finalScoreUpdate);
        }

        else {
            finalScoreUpdate.textContent = "You lose";
            divDisplayResults.appendChild(finalScoreUpdate);
        }

        humanScore = 0;
        computerScore = 0;
    }
}

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

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            const scoreUpdate = document.createElement("li");
            scoreUpdate.textContent = "its a draw";
            divDisplayResults.appendChild(scoreUpdate);

            let score = document.createElement("li");
            score.textContent = "human score: " + humanScore + " computer score: " + computerScore;
            divDisplayResults.appendChild(score);

        }
    
        else if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            const scoreUpdate = document.createElement("li");
            scoreUpdate.textContent = "You lose paper beats rock";
            divDisplayResults.appendChild(scoreUpdate);

            let score = document.createElement("li");
            score.textContent = "human score: " + humanScore + " computer score: " + computerScore;
            divDisplayResults.appendChild(score);
        }
    
        else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            humanScore++;
            const scoreUpdate = document.createElement("li");
            scoreUpdate.textContent = "You win rock beats scissors";
            divDisplayResults.appendChild(scoreUpdate);

            let score = document.createElement("li");
            score.textContent = "human score: " + humanScore + " computer score: " + computerScore;
            divDisplayResults.appendChild(score);
        }
    
        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            humanScore++;
            const scoreUpdate = document.createElement("li");
            scoreUpdate.textContent = "You win paper beats rock";
            divDisplayResults.appendChild(scoreUpdate);

            let score = document.createElement("li");
            score.textContent = "human score: " + humanScore + " computer score: " + computerScore;
            divDisplayResults.appendChild(score);
        }
    
        else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++;
            const scoreUpdate = document.createElement("li");
            scoreUpdate.textContent = "You lose Scissors beats paper";
            divDisplayResults.appendChild(scoreUpdate);

            let score = document.createElement("li");
            score.textContent = "human score: " + humanScore + " computer score: " + computerScore;
            divDisplayResults.appendChild(score);
        }
    
        else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            humanScore++;
            const scoreUpdate = document.createElement("li");
            scoreUpdate.textContent = "You Win Scissors beats paper";
            divDisplayResults.appendChild(scoreUpdate);

            let score = document.createElement("li");
            score.textContent = "human score: " + humanScore + " computer score: " + computerScore;
            divDisplayResults.appendChild(score);
        }
    
        else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++;
            const scoreUpdate = document.createElement("li");
            scoreUpdate.textContent = "You lose Rock beats scissors";
            divDisplayResults.appendChild(scoreUpdate);

            let score = document.createElement("li");
            score.textContent = "human score: " + humanScore + " computer score: " + computerScore;
            divDisplayResults.appendChild(score);
        }
    
        else {
            return console.log("invalid input");
        }

        checkGameOver();
    }

const computerSelection = getComputerChoice();

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const resetButton = document.querySelector(".resetButton");
const divDisplayResults = document.querySelector(".results");

rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
})

paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
})

scissorsButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
})

resetButton.addEventListener("click", () => {
    divDisplayResults.innerHTML = '';
})