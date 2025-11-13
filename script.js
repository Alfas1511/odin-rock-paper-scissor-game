console.log("Hello World");
console.log("ROCK-PAPER-SCISSOR Game!");

let humanScore = 0;
let computerScore = 0;
let max = 5;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("COMPUTER SCORED!!");
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
        humanScore++;
        console.log("YOU SCORED!!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("YOU SCORED!!");
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        computerScore++;
        console.log("COMPUTER SCORED!!");
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        computerScore++;
        console.log("COMPUTER SCORED!!");
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        humanScore++;
        console.log("YOU SCORED!!");
    }

    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissor").toLowerCase();

    while (!["rock", "paper", "scissor"].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissor:").toLowerCase();
    }

    return choice;
}

for (let i = 1; i <= max; i++) {
    console.log(`\n--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log("\nGAME OVER!");
console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
