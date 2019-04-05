let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const papper_div = document.getElementById("p");

function getComputerChoice(){
    const choices= ['r', 's', 'p'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function letterToWord(word){
    if(word === "r") return "Rock";
    if(word === "p") return "Papper";
    return "scissors";
    
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = letterToWord(userChoice)+smallUserWord + " beats " +  letterToWord(computerChoice) + smallCompWord + " .You win !";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},3000);
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = letterToWord(userChoice)+smallUserWord + " loses to " +  letterToWord(computerChoice) + smallCompWord + " .You lost !";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},3000);
   
}
function draw(userChoice, computerChoice){
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = letterToWord(userChoice)+smallUserWord + " equals " +  letterToWord(computerChoice) + smallCompWord + " .Its a draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},3000);
    
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice)
    {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp": 
        case "ps": 
        case "sr":  
            lose(userChoice, computerChoice);
            break;
        case "rr": 
        case "ss": 
        case "pp":  
            draw(userChoice, computerChoice);
            break;        
    }
}



function main(){
    rock_div.addEventListener("click", function(){
        game("r");
    })
    scissors_div.addEventListener("click", function(){
        game("s");
    })
    papper_div.addEventListener("click", function(){
        game("p");
    })

}

main();