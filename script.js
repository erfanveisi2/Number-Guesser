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
console.log(cumputerGuesses())