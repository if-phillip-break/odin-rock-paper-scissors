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
        return 2;
    } else if (playerChoice == "rock" && computerSelection == "Scissors"){
        return 1;
    } else if (playerChoice == "scissors" && computerSelection == "Rock"){
        return 2;
    } else if (playerChoice == "paper" && computerSelection == "Rock"){
        return 1;
    } else if (playerChoice == "scissors" && computerSelection == "Paper"){
        return 1;
    } else if (playerChoice == "paper" && computerSelection == "Scissors"){
        return 2;
    } else {
        return 0;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++){

        let outcome = playRound(prompt("Choose rock, paper, or scissors: "), getComputerChoice());

        switch (outcome) {
            case 1:
                playerScore++;
                break;
            case 2:
                computerScore++;
                break;
            default:
        } 

        console.log("You have won " + playerScore + " times, while the computer has won " + computerScore + " times.");
    }

    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "You Lose!";
    } else {
        return "It's a tie!";
    }
}

console.log(game())