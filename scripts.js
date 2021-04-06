'use strict'

function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    let randomPlay = Math.ceil(Math.random() * 3) - 1;
    return arr[randomPlay];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return "Tie!"
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        return "You Lose!  Paper beats Rock!";
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        return "You Win!  Rock beats Scissors!";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        return "You Win!  Paper beats Rock.";
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        return "You Lose!  Scissors beats Paper.";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        return "You Lose!  Rock beats Scissors.";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
        return "You Win!  Paper beats Scissors.";
    }
}


// let playerSelection = "rock";
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection))

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    for (let i = 0; i < 5 ; i++) {
        let playerSelection = prompt()
        let computerSelection = computerPlay()
        result = playRound(playerSelection,computerSelection)
        console.log(result)
        if (result.slice(4,5) === "W") {
            playerScore++
        } else if (result.slice(4,5) === "L"){
            computerScore++
        }
    }   
    if (playerScore === computerScore) {
        console.log("The match was a tie.  Try again!")
    } else if (playerScore > computerScore) {
        console.log(`You have ${playerScore} points.  You Win!`)
    } else console.log(`The computer has ${computerScore} points.  You lose.`)
}

game()