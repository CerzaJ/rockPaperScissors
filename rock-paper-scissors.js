const possibleChoices = possibleChoices.split('Rock', 'Paper', 'Scissors')

function getComputerChoice(){
const randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
}
