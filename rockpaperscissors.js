// write the logic to create the computer choice
//create a function called getComputerChoice.
//uisng Math.random getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getHumanChoice() {
  const playerChoice = prompt("Pick a move!");
  return playerChoice;
}
console.log(getHumanChoice());

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

