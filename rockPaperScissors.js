let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function lose() {
    console.log("lost");
}

function draw() {
    console.log("draw");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }
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