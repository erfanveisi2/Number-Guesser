let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget= ()=>{
  return  Math.floor(Math.random()*9)
}

const cumputerGuesses=(userGuess , computerGuess , secretNumber)=>{
    if(Math.abs(secretNumber-userGuess) < Math.abs(secretNumber-computerGuess)){
        return true;
    }else if(secretNumber-userGuess===secretNumber-computerGuess){
        return true;  
    }else{
        return false;
    }
} 

const updateScore = (winner)=>{
    if(winner==='human'){
        humanScore+=1;
    }else if(winner==='computer'){
        computerScore+=1;
    }
}

const advanceRound = ()=>{
    currentRoundNumber+=1;
}
advanceRound()