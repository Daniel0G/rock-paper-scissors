// write the logic to create the computer choice
//create a function called getComputerChoice.
//uisng Math.random getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
//Create two new variables named humanScore and computerScore in the global scope.

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  const playerChoice = prompt("Pick a move!");
  if (playerChoice === "rock" || playerChoice ==="paper" || playerChoice === "scissors") {
    return playerChoice;
  } else {
    alert("try again");
  }
}
//console.log(getHumanChoice());

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}
//console.log(getComputerChoice());

function playRound(humanChoice, computerChoice){
// condtionals for different results 
  if (humanChoice === "rock" && computerChoice === "rock"
      ||humanChoice === "paper" && computerChoice === "paper"
      ||humanChoice === "scissors" && computerChoice === "scissors" ){
        console.log("it's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "paper"){
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    console.log("You win! scissors beats paper");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    console.log("You lose! scissors beats paper");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    console.log("You win! rock beats scissors");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock"){
    console.log("You lose! rock beats scissors");
    computerScore++;
  } else if (humanChoice === "rock","ROCK","Rock" || humanChoice ==="paper","PAPER","Paper" || humanChoice === "scissors","SCISSORS","Scissors") {
    return humanChoice;
  } else {
    alert("incorrect! Please try again.")
  }
}
//putting our choice funtions into constant variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//outputting the choices to the console for clarity
console.log(humanSelection);
console.log(computerSelection);

//Displaying the results to the console
playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);
