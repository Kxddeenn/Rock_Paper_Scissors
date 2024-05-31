
// Create a function that returns strings "rock", "papper", "scissors"
// Called getComputerChoice

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 100);
    
    if (randomNumber < 33.3){
        randomNumber = "Rock";
    }

    else if (randomNumber >= 33.3 && randomNumber < 66.6){
        randomNumber = "Scissors";
    }
    
    else {
        randomNumber = "Papper";
    }

    return randomNumber;
}
