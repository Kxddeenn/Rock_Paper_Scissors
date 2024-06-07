// Event List for the Images

function startGame(){

    // Plays game until someone wins
    let imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            
            if(img.id){
                playRound(img.id);
            }

        });
    });

}



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


// Variables to keep track of score 

let humanScore = 0;
let computerScore = 0;
let tieCount = 0;

// Function called playRound
// Will take human and computer player choices as arguments, plays a single round, increments the round winner's score
// Logs a winner annoucement

function playRound(humanChoice){

    const computerChoice = getComputerChoice();

    
    if( humanChoice === computerChoice){
        tieCount++;
        const tiedContainer = document.querySelector(".score");

        const existingTies = tiedContainer.querySelector("h2");

        if(existingTies) {
            existingTies.remove();
        }

        const newTies = document.createElement('h2');
        newTies.textContent = `Ties: ${tieCount}`;
        newTies.classList.add("ties");
        tiedContainer.appendChild(newTies);
    }

    else if ( humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log("Human Score:", humanScore, "Computer Score:" , computerScore);
        computerScore++;
    }

    else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log("Human Score:", humanScore, "Computer Score:" , computerScore);
        humanScore++;
    }

}

// Reset Game Function

function resetGame(){

}


startGame();
