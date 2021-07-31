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

function convertFirtsLetter(letter) {
    if (letter === "rock") return "Rock";
    if (letter === "paper") return "Papel";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertFirtsLetter(userChoice) + " beats " + convertFirtsLetter(computerChoice) + ". You WIN! ";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = convertFirtsLetter(userChoice) + " loses to " + convertFirtsLetter(computerChoice) + ". You lost... ";
}

function draw(userChoice, computerChoice) {
    result.innerHTML = convertFirtsLetter(userChoice) + " equals " + convertFirtsLetter(computerChoice) + ". It's a draw. ";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
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