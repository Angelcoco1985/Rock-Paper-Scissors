let randomNum = Math.random() * 1;
function getComputerChoice() {
    // let randomNum = Math.random * 1;
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