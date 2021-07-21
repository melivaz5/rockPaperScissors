const userScore = 0;
const computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}




function game(userChoice) {
    const computerChoice = getComputerChoice();

    if (userChoice + computerChoice) {
        userChoice === "rock" & computerChoice === "scissors"
        else if() {
            userChoice === "paper" & computerChoice === "rock"
        }
        else if() {
            userChoice === "scissors" & computerChoice === "rock"
        }
        console.log("USER WIN..");
     } else {
         console.log("user lose");
     }

    /*
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log("user win!");
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("user lose!");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("Its a draw");
            break;
    }
    */
}



function main() {

    rock.addEventListener("click", function() {
        game("rock");
    })
    
    paper.addEventListener("click", function() {
        game("paper");
    })
    
    scissors.addEventListener("click", function() {
        game("scissors");
    })
}

main();