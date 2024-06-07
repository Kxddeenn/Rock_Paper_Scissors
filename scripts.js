
// Create a function that returns strings "rock", "papper", "scissors"
// Called getComputerChoice

function getComputerChoice(){
   let randomNumber = Math.floor(Math.random() * 100);
    
    if (randomNumber < 33.3){
        randomNumber = "rock";
    }

    else if (randomNumber >= 33.3 && randomNumber < 66.6){
        randomNumber = "scissors";
    }
    
    else {
        randomNumber = "paper";
    }

    return randomNumber;
};



// New function called getHumanChoice
// Returns valid values (One of the options)

function getHumanChoice(){

 let humanChoice = prompt("Please choose Paper, Scissors or Rock");
    humanChoice = humanChoice.toLowerCase();

    while (1){
        if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
            humanChoice = prompt("Invalid Choice. Enter your pick");
        }
        else {
            break;
        }
    }

    return humanChoice;

}


// Variables to keep track of score 

let humanScore = 0;
let computerScore = 0;

// Function called playRound
// Will take human and computer player choices as arguments, plays a single round, increments the round winner's score
// Logs a winner annoucement

function playRound(humanChoice, computerChoice){

    if( humanChoice == computerChoice){
        console.log(`It's a tie! Both selected ${computerChoice}.`);
    }

    else if ( humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "rock" && computerChoice == "paper"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log("Human Score:", humanScore, "Computer Score:" , computerScore);
    }

    else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        computerScore++;
        console.log("Human Score:", humanScore, "Computer Score:" , computerScore);
    }

}

// Function called playGame that will call playRound 5 times
// All the variables will be called within the function
// Play 5 rounds

function playGame(){

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

};


// Creating three event Listeners to call PlayRound

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', playGame);
});

