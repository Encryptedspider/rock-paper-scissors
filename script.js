

//COMPUTER CHOICE 
//The function picks a random number between 1-3 and gives each number a value of Rock, Paper or Scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
    return "scissors";
    }
}

let computerSelection = getComputerChoice();
computerSelection = computerSelection.toLowerCase();
console.log("I choose " + computerSelection);


//HUMAN CHOICE
//This function asks the player to pick Rock, Paper or Scissors and returns what they have picked
function getHumanChoice() {
    let humanChoice = prompt("Please make your choice from Rock, Paper or Scissors");
    return humanChoice;
}

let humanSelection = getHumanChoice();
humanSelection = humanSelection.toLowerCase();
console.log(humanSelection);


function playGame() {
//SCORES
let computerScore = 0;
let humanScore = 0;


for (let i = 1; i <= 4; i++) {
 
 if (i <=4) {   
    console.log(playRound(computerSelection, humanSelection))
    return result = i;
 } else {
    return "Game over";
 }
}

//PLAY ROUND
// a function that takes the human and computer player choices as arguments, 
//plays a single round, 
//increments the round winner’s score and logs a winner announcement. */

function playRound(computerChoice, humanChoice) {

    if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++
        return "Well done! you win, Paper beats Rock";
        
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++
        return "You Lose! Paper beats Rock"; 

    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++
        return "Well done! you win, Rock beats Scissors"; 

    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++
        return "You lose! Rock beats Scissors"; 
    
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++
        return "Well done! you win, Scissors beats Paper"; 
    
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++
        return "You lose! Scissors beats Paper"; 
    
    } else  {
        return "its a draw";
    }
}

//let result = playRound(computerSelection, humanSelection);
    return result;

//return (playRound(computerSelection, humanSelection)); 
//return ("The score is - " + "Computer: " + computerScore + " You: " + humanScore);

}

console.log(playGame());
console.log(playGame());
console.log(playGame());




