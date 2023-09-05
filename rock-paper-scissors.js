const possibleChoices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    const randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return(randomChoice);
}

function playRound(playerSelection, computerSelection){
    const rock = 'rock'
    const paper = 'paper'
    const scissors = 'scissors'
    if(playerSelection == computerSelection){
        return('Tie')
    }else if(playerSelection == rock && computerSelection == paper){
        return('You loose, paper beats rock')
    }else if(playerSelection == scissors && computerSelection == paper){
        return('You won')   
    }else if(playerSelection == rock && computerSelectionn == scissors){
        return('You won')
    }else if(playerSelection == paper && computerSelection == scissors){
        return('You loose, scissors beats paper')
    }else if(playerSelection == paper && computerSelection == rock){
        return('You won')
    }else if (playerSelection == scissors && computerSelection == rock){
        return('You loose, rock beats scissors')
    }
}
const playerSelection = prompt('Choose R P S')
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()))