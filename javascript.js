function getComputerChoice(){

    let num = Math.floor(Math.random() * 3);
    let decision = "";

    switch (num) {
        case 0:
            decision = "Rock";
            break;
        case 1:
            decision = "Paper";
            break;
        default:
            decision = "Scissors";
    }
    return decision;
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == "rock" && computerSelection == "Paper"){
        return "You Lose! Paper beats Rock";
    } else if (playerChoice == "rock" && computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors";
    } else if (playerChoice == "scissors" && computerSelection == "Rock"){
        return "You Lose! Rock beats Scissors";
    } else if (playerChoice == "paper" && computerSelection == "Rock"){
        return "You Win! Paper beats Rock";
    } else if (playerChoice == "scissors" && computerSelection == "Paper"){
        return "You Win! Scissors beats Paper";
    } else if (playerChoice == "paper" && computerSelection == "Scissors"){
        return "You Lose! Scissors beats Paper";
    } else {
        return "Tie! Try again";
    }
}

const playerMove = "sciSsors";
const computerMove = getComputerChoice();
console.log(playRound(playerMove, computerMove));