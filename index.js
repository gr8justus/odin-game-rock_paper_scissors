'use strict';

// computer makes a choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = null;
    switch (randomNum) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        case 3:
            computerChoice = 'paper';
            break;
    }
    return computerChoice;
}

// player makes a choice
function getPlayerChoice() {
    let playerChoice = prompt('Make your choice: rock|scissors|paper');
    return playerChoice = playerChoice.toLowerCase();
}

// game result revealed
function playRound(computerSelection, playerSelection) {
    let winner = null;
    
    if (computerSelection === 'rock') {
        switch (playerSelection) {
            case 'paper':
                winner = 'You Won! Paper beats Rock';
                break;
            case 'scissors':
                winner = 'You Lose! Rock beats Scissors';
                break;
            case 'rock':
                winner = 'It\'s a draw!'
                break;
            default:
                winner = 'Option not available!!!'
        }
    } else if (computerSelection === 'scissors') {
        switch (playerSelection) {
            case 'rock':
                winner = 'You Won! Rock beats Scissors';
                break;
            case 'paper':
                winner = 'You Lose! Scissors beats Paper';
                break;
            case 'scissors':
                winner = 'It\'s a draw!'
                break;
            default:
                winner = 'Option not available!!!'
        }
    } else if (computerSelection === 'paper') {
        switch (playerSelection) {
            case 'scissors':
                winner = 'You Won! Scissors beats paper';
                break;
            case 'rock':
                winner = 'You Lose! Paper beats rock';
                break;
            case 'paper':
                winner = 'It\'s a draw!'
                break;
            default:
                winner = 'Option not available!!!'
        }
    }
    console.log(winner);
}

// play game
playRound(getComputerChoice(), getPlayerChoice());
