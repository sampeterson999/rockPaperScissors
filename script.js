//generates a random computer answer
function getComputer() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[(Math.floor(Math.random() * options.length))];
}

//prompts player for answer and formats
function getPlayer() {
    let playerReply = prompt("Choose Rock, Paper, or Scissors:");
    let playerSelection = playerReply.replace((playerReply), (playerReply.charAt(0).toUpperCase() + playerReply.slice(1).toLowerCase()));
    return playerSelection;
}

//creates scoreboard
let playerScore = 0;
let computerScore = 0;

//code for one iteration of the game.
//personal note: code acts because it pulls new Selections, alters score.
function playRound(selection) {
    let playerSelection = selection;
    let computerSelection = getComputer()
    console.log(playerSelection);
    console.log(computerSelection);

    // includes scorekeeper for game()
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        console.log(computerScore);
        winner.textContent = (`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore++;
        winner.textContent = (`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore++;
        winner.textContent = (`${computerSelection} beats ${playerSelection}. You lose!`);
    } else if (playerSelection === computerSelection) {
        winner.textContent = (`Tie! Try again.`);
    } else {
        playerScore++;
        winner.textContent = (`${playerSelection} beats ${computerSelection}. You win!`);
    };
    return score.textContent = `Player: ${playerScore}    Computer:${computerScore}`
};


const bbox = document.querySelector('.bbox')
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    console.log('Rock');
    playRound('Rock');

});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    console.log('Paper');
    playRound('Paper');
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    console.log('Scissors');
    playRound('Scissors');
});

const data = document.querySelector('.data');

const winner = document.querySelector('.winner');
winner.textContent = 'Play a game!';
winner.classList.add('winner')
const score = document.querySelector('.score');
score.classList.add('score');
score.textContent = `Player: ${playerScore}    Computer:${computerScore}`

const ultimate =document.querySelector('.ultimate')
const bigWinner = document.querySelector('.bigWinner')
bigWinner.classList.add('.bigWinner')

//data.appendChild(winner);
//data.appendChild(score);


function finale(playerScore, computerScore) {
    
    if (playerScore >= 5) {
        bigWinner.textContent = `Humanity wins! ${playerScore} to ${computerScore}`
   } else if (computerScore >= 5) {
       bigWinner.textContent = `Humanity loses. ${computerScore} to ${playerScore}. Perdition beckons.`
   } else {
       bigWinner.textContent = ``
    } 
}


// very simple loop, will try to rewrite loop in better way. provides final score
// personal note: code acts because it replays a working function then uses its output.
/*function game() {
//    //reset scores


    score.textContent = `${playerScore}-${computerScore}`;

    for (let i = 0; i < 5; i++) {
        playRound() 
        };
    function nameWinner(){
        if (playerScore > computerScore) {
             score.textContent = `Humanity wins! ${playerScore} to ${computerScore}`
        } else if (playerScore < computerScore) {
            score.textContent = `Humanity loses. ${computerScore} to ${playerScore}. Perdition beckons.`
        } else {
            score.textContent = `Tie game! The score was ${computerScore} to ${playerScore}. Maybe we can do that thing from the movie War Games.`
        }
        } 
         }; */



    //game works, display does not