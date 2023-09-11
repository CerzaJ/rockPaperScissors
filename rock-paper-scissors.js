function getCompChoice(){
    const possibleChoices = ['rock', 'paper', 'scissors'];
    let selection = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return(selection);
}

let result = [];
function playRound(playerChoice, computerChoice){   
    let roundResult = ''; 
    if(playerChoice == computerChoice){
        roundResult += 'It was a tie ';
    }else if(
        (playerChoice == 'rock' && computerChoice == 'scissors')||
        (playerChoice == 'paper' && computerChoice == 'rock')||
        (playerChoice == 'scissors' && computerChoice == 'paper')
    ){
        roundResult += 'You won ';
        playerScore++;
    }else{
        roundResult += 'You lost ';
        compScore++;
    }
    result.push(`Round ${roundNum + 1}: ${roundResult}, you chose ${playerChoice} and the computer chose ${computerChoice}`);
    roundNum++;
}

let computerChoice = '';
let playerChoice = '';
let roundNum = 0;
let compScore = 0;
let playerScore = 0;

function game(){
    for(let i = 0; i < 5; i++){
    let playerChoice= prompt ('R, P, S').toLowerCase();
    let computerChoice = getCompChoice();
    console.log(playRound(playerChoice, computerChoice));
    }
}

function getRoundResults(){
    for(let i = 0; i < result.length; i++){
        console.log(result[i])
    }
    return(getWinner());
}

function getWinner(){
    if(playerScore > compScore){
       console.log(`You win the game
    Your score: ${playerScore}
    My score: ${compScore}`);
    }else if(playerScore < compScore){
        console.log(`You lost the game, try again!
        Your score: ${playerScore}
       My score: ${compScore}`);
    }
}


