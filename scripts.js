'use strict'

function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    let randomPlay = Math.ceil(Math.random() * 3) - 1;
    return arr[randomPlay];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        console.log("Tie!")
        return null;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Paper") {
        console.log("You Lose!  Paper beats Rock!")
        return false;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection === "Scissors") {
        console.log("You Win!  Rock beats Scissors!")
        return true;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Rock") {
        console.log("You Win!  Paper beats Rock.")
        return true;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection === "Scissors") {
        console.log("You Lose!  Scissors beats Paper.")
        return false;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Rock") {
        console.log("You Lose!  Rock beats Scissors.")
        return false;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection === "Paper") {
        console.log("You Win!  Paper beats Scissors.")
        return true;
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
        // console.log(result)
        if (result === true) {
            playerScore++
        } else if (result === false){
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