let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



// The computer choice by random numbers
function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];                         // A triky one, it's equaling the random number b el Index
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}



// a function that gets the score and prints to the page the results in case the user won
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = convertToWord(userChoice) + " "+ smallUserWord + " beats " + 
    convertToWord(computerChoice) + " " + smallCompWord +" , you win";
    userChoice_div.classList.add("green-glow");
    setTimeout(function(){userChoice_div.classList.remove("green-glow")}, 400);
}

// a function that gets the score and prints to the page the results in case the user loses
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = convertToWord(userChoice) + " "+ smallUserWord + " loses to " + 
    convertToWord(computerChoice) + " " + smallCompWord +" , you lost";
    userChoice_div.classList.add("red-glow");
    setTimeout(function(){userChoice_div.classList.remove("red-glow")}, 400);
}

// a function that gets the score and prints to the page the results in case the user gets a tie
function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = convertToWord(userChoice) + " "+ smallUserWord + " equals " + 
    convertToWord(computerChoice) + " " + smallCompWord +" , it's a draw";
    userChoice_div.classList.add("grey-glow");
    setTimeout(function(){userChoice_div.classList.remove("grey-glow")}, 400);
}






// The game function to see who wins
function game(userChoice){
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// The user choice based on his click
function main(){

    rock_div.addEventListener('click', function(){
        game("r");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
}

main();
