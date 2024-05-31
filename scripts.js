
// Create a function that returns strings "rock", "papper", "scissors"
// Called getComputerChoice

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 100);
    
    if (randomNumber < 33.3){
        randomNumber = "rock";
    }

    else if (randomNumber >= 33.3 && randomNumber < 66.6){
        randomNumber = "scissors";
    }
    
    else {
        randomNumber = "papper";
    }

    return randomNumber;
};



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


// Variables to keep track of score 

humanScore = 0;
computerScore = 0;

// Function called playRound
// Will take human and computer player choices as arguments, plays a single round, increments the round winner's score
// Logs a winner annoucement

function playRound(humanChoice, computerChoice){

    if( humanChoice == computerChoice){
        console.log("It's a tie");
    }

    else if ( humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        console.log("Human Score: ", humanScore, "Computer Score: " , computerScore);
    }

    else if ( humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
        console.log("Human Score: ", humanScore, "Computer Score: " , computerScore);
    }

    else if ( humanChoice == "scissors" && computerChoice == "papper"){
        console.log("You win! Scissors beats Papper");
        humanScore++;
        console.log("Human Score: ", humanScore, "Computer Score: " , computerScore);
    }

    else if ( humanChoice == "papper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Papper");
        computerScore++;
        console.log("Human Score: ", humanScore, "Computer Score: " , computerScore);
    }

    else if ( humanChoice == "rock" && computerChoice == "papper"){
        console.log("You lose! Papper beats Rock");
        computerScore++;
        console.log("Human Score: ", humanScore, "Computer Score: " , computerScore);
    }

    else {
        console.log("You win! Papper beats Rock");
        computerScore++;
        console.log("Human Score: ", humanScore, "Computer Score: " , computerScore);
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Function that will call playRound 5 times
// All the variables will be called within the function
// Play 5 rounds
