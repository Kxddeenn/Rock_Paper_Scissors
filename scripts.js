// Event List for the Images

function startGame() {
  // Plays game until someone wins

  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    });
  });
}

// Create a function that returns strings "rock", "papper", "scissors"
// Called getComputerChoice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber < 33.3) {
    randomNumber = "rock";
  } else if (randomNumber >= 33.3 && randomNumber < 66.6) {
    randomNumber = "scissors";
  } else {
    randomNumber = "paper";
  }

  return randomNumber;
}

// Variables to keep track of score

let humanScore = 0;
let computerScore = 0;
let tieCount = 0;

// Function called playRound
// Will take human and computer player choices as arguments, plays a single round, increments the round winner's score
// Logs a winner annoucement

function playRound(humanChoice) {
  const tiedContainer = document.querySelector(".score");
  const existingGameText = tiedContainer.querySelector(".game-text");

  if (existingGameText) {
    existingGameText.remove();
  }

  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    tieCount++;

    const existingTies = tiedContainer.querySelector("h2.ties");

    if (existingTies) {
      existingTies.textContent = `Ties: ${tieCount}`;
    } else {
      const newTies = document.createElement("h2");
      newTies.textContent = `Ties: ${tieCount}`;
      newTies.classList.add("ties");
      tiedContainer.appendChild(newTies);
    }

    const gameText = document.createElement("h2");
    gameText.textContent = "It was a tie!";
    gameText.classList.add("game-text");
    tiedContainer.appendChild(gameText);
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    computerScore++;

    const computerContainer = document.querySelector(".computerScore");

    if (computerContainer) {
      computerContainer.textContent = `Score: ${computerScore}`;
    } else {
      const newComp = document.createElement("h3");
      newComp.textContent = `Score: ${computerScore}`;
      newComp.classList.add("computerScore");
    }

    const gameText = document.createElement("h2");
    gameText.textContent = "Computer Wins!";
    gameText.classList.add("game-text");
    tiedContainer.appendChild(gameText);



  } else {
    humanScore++;

    const humanContainer = document.querySelector(".playerScore");

    if (humanContainer) {
        humanContainer.textContent = `Score: ${humanScore}`;
    } else {
        const newPlay = document.createElement("h3");
        newPlay.textContent = `Score: ${humanScore}`;
        newPlay.classList.add("playerScore");
    }

    const gameText = document.createElement("h2");
    gameText.textContent = "Player Wins!";
    gameText.classList.add("game-text");
    tiedContainer.appendChild(gameText);

  }
}

// Reset Game Function

function resetGame() {}

startGame();
