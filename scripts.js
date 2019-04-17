function computerPlay(){ //A function that returns 'Rock,' 'Paper,' or 'Scissors' with a random number generator
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
function playRound(playerSelection, computerSelection){ //A function that plays 1 round of rock paper scissors. Arguments are the player's choice and the computer's choice
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
        return ['You Win! Paper beats Rock', 1, 0]; //Return array with message, player score increase, and computer score increase
    }
    else if (corPlayerSelection === 'Scissors' && computerSelection === 'Paper'){
        return ['You Win! Scissors beats Paper', 1, 0]; //Return array with message, player score increase, and computer score increase
    }
    else{
        return [('You Lose! ' + computerSelection + ' beats ' + corPlayerSelection), 0, 1]; //Return array with message, player score increase, and computer score increase
    }
}

let playerScore = 0; //Define the playerScore variable
let computerScore = 0; //Define the computerScore variable

function isGameOver(){ //A function to check to see if the game is over
    if(playerScore>=5 && computerScore<5){
        wonDiv = document.querySelector('#won');
        wonDiv.innerHTML = "";
        let wonText = document.createElement('p'); //Create a new p element to display the won text
        wonText.textContent = "You Won the Game!!!";
        wonText.classList.add("wonP"); //Adds the class wonP (in CSS, used to add border to won text)
        wonDiv.appendChild(wonText);
    }
    else if(computerScore>=5 && playerScore<5){
        wonDiv = document.querySelector('#won');
        wonDiv.innerHTML = "";
        let wonText = document.createElement('p');
        wonText.textContent = "You Lost the Game!";
        wonText.classList.add("wonP");
        wonDiv.appendChild(wonText);
    }
}

function calculateScore(result){ //Changes playerScore and computerScore to the new calculated scores
    playerScore += result[1];
    computerScore += result[2];
}

function displayScore(){ //A function to display the score in the score number p elements
    console.log("Player Score: " + playerScore.toString());
    console.log("Computer Score: " + computerScore.toString());

    let playerScoreP = document.querySelector('#playerScoreNumber');
    let computerScoreP = document.querySelector('#computerScoreNumber');
    playerScoreP.textContent = playerScore.toString();
    computerScoreP.textContent = computerScore.toString();
}

function displayRoundText(result){ //A function to display the text outcome of the current round in the roundText p element
    let roundTextDiv = document.querySelector('#roundText');
    roundTextDiv.innerHTML = "";
    let roundTextP = document.createElement('p');
    roundTextP.textContent = result;
    roundTextDiv.appendChild(roundTextP);
}


function resetGame(){ //A function that resets the score variables and sets the roundText and won elements to a blank string
    playerScore = 0;
    computerScore = 0;
    displayScore();
    let roundTextDiv = document.querySelector('#roundText');
    roundTextDiv.innerHTML = "";
    let wonDiv = document.querySelector('#won');
    wonDiv.innerHTML = "";
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => { //Add event listener to rock button. Function runs all necessary game functions when 'rock' button is pressed
    let result = playRound('Rock', computerPlay()); //Sets the round result array to the variable result
    calculateScore(result);
    displayScore();
    displayRoundText(result[0]);
    isGameOver();
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => { //Add event listener to paper button. Function runs all necessary game functions when 'paper' button is pressed
    let result = playRound('Paper', computerPlay());
    calculateScore(result);
    displayScore();
    displayRoundText(result[0]);
    isGameOver();
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => { //Add event listener to scissors button. Function runs all necessary game functions when 'scissors' button is pressed
    let result = playRound('Scissors', computerPlay());
    calculateScore(result);
    displayScore();
    displayRoundText(result[0]);
    isGameOver();
});

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => { //Add event listener to reset button. Runs reset() function when clicked
    resetGame();
});