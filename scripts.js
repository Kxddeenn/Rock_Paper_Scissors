
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
};

console.log(getComputerChoice());

// New function called getHumanChoice
// Returns valid values (One of the options)

function getHumanChoice(){

    humanChoice = prompt("Please choose Papper, Scissors or Rock");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice !== "papper" && humanChoice !== "rock" && humanChoice !== "papper"){
    
        humanChoice = prompt("Please choose Papper, Scissors or Rock");
        
    }

    return humanChoice;

}

console.log(getHumanChoice());
