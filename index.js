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
    let score = null;
    
    if (computerSelection === 'rock') {
        switch (playerSelection) {
            case 'paper':
                score = 'You Won! Paper beats Rock';
                break;
            case 'scissors':
                score = 'You Lose! Rock beats Scissors';
                break;
            case 'rock':
                score = 'It\'s a draw!'
                break;
        }
    } else if (computerSelection === 'scissors') {
        switch (playerSelection) {
            case 'rock':
                score = 'You Won! Rock beats Scissors';
                break;
            case 'paper':
                score = 'You Lose! Scissors beats Paper';
                break;
            case 'scissors':
                score = 'It\'s a draw!'
                break;
        }
    } else if (computerSelection === 'paper') {
        switch (playerSelection) {
            case 'scissors':
                score = 'You Won! Scissors beats paper';
                break;
            case 'rock':
                score = 'You Lose! Paper beats rock';
                break;
            case 'paper':
                score = 'It\'s a draw!'
                break;
        }
    }
    return score;
}

// play game
function game() {
    let marks = 0;
    let finalScore = null;

    for (let i = 1; i <= 5; i++) {
        let score = playRound(getComputerChoice(), getPlayerChoice());
        console.log(score);
        
        if (/won/i.test(score) === true) {
            marks += 2; 
        } else if (/draw/i.test(score) === true) {
            marks += 1; 
        }
    }
    
    if (marks > 5) {
        finalScore = `Champion! ${marks} out of 10`;
    }  else if (marks = 5) {
        finalScore = `It\'s a draw! ${marks} out of 10`;
    }  else {
        finalScore = `Keep trying! ${marks} out of 10`;
    }

    console.log(finalScore);
}
    
game();