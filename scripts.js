function computerPlay(){
    numResult = Math.floor(Math.random() * 3);
    if (numResult === 0){
        return 'Rock'
    }
    else if (numResult === 1) {
        return 'Paper'
    }
    else{
        return 'Scissors'
    }
}
function playRound(playerSelection, computerSelection){
    let lowerPlayerSelection = playerSelection.toLowerCase();
    let playerRestString = lowerPlayerSelection.slice(1);
    let firstLetter = playerSelection.charAt(0);
    let upperFirstLetter = firstLetter.toUpperCase();
    let corPlayerSelection = upperFirstLetter + playerRestString;

    if (corPlayerSelection === computerSelection){
        return ['Tie!', 0, 0]; //Return array with message, player score increase, and computer score increase
    }
    else if (corPlayerSelection === 'Rock' && computerSelection === 'Scissors'){
        return ['You Win! Rock beats Scissors', 1, 0]; //Return an array with the message, player score increase, and computer score increase
    }
    else if (corPlayerSelection === 'Paper' && computerSelection === 'Rock'){
        return ['You Win! Paper beats Rock', 1, 0];
    }
    else if (corPlayerSelection === 'Scissors' && computerSelection === 'Paper'){
        return ['You Win! Scissors beats Paper', 1, 0];
    }
    else{
        return [('You Lose! ' + computerSelection + ' beats ' + corPlayerSelection), 0, 1];
    }
}

let playerScore = 0;
let computerScore = 0;

function isGameOver(){
    if(playerScore>=5 && computerScore<5){
        wonDiv = document.querySelector('#won');
        wonDiv.innerHTML = "";
        let wonText = document.createElement('p');
        wonText.textContent = "You Won the Game!!!";
        wonDiv.appendChild(wonText);
    }
    else if(computerScore>=5 && playerScore<5){
        wonDiv = document.querySelector('#won');
        wonDiv.innerHTML = "";
        let wonText = document.createElement('p');
        wonText.textContent = "You Lost the Game!";
        wonDiv.appendChild(wonText);
    }
}

function calculateScore(result){ //Changes playerScore and computerScore to the new calculated scores
    playerScore += result[1];
    computerScore += result[2];
}

function displayScore(){
    console.log("Player Score: " + playerScore.toString());
    console.log("Computer Score: " + computerScore.toString());

    let playerScoreP = document.querySelector('#playerScoreNumber');
    let computerScoreP = document.querySelector('#computerScoreNumber');
    playerScoreP.textContent = playerScore.toString();
    computerScoreP.textContent = computerScore.toString();
}

function displayRoundText(result){
    let roundTextDiv = document.querySelector('#roundText');
    roundTextDiv.innerHTML = "";
    let roundTextP = document.createElement('p');
    roundTextP.textContent = result;
    roundTextDiv.appendChild(roundTextP);
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => { //Add event listener to rock button
    let result = playRound('Rock', computerPlay());
    calculateScore(result);
    displayScore();
    displayRoundText(result[0]);
    isGameOver();
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => { //Add event listener to paper button
    let result = playRound('Paper', computerPlay());
    calculateScore(result);
    displayScore();
    displayRoundText(result[0]);
    isGameOver();
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => { //Add event listener to scissors button
    let result = playRound('Scissors', computerPlay());
    calculateScore(result);
    displayScore();
    displayRoundText(result[0]);
    isGameOver();
});