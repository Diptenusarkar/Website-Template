const resultText = document.getElementById("result");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const playerMove = document.getElementById("playerMove");
const computerMove = document.getElementById("computerMove");
const rockBtn = document.getElementById("move1");
const paperBtn = document.getElementById("move2");
const scissorBtn = document.getElementById("move3");

let playerScore=0;
let computerScore=0;

rockBtn.addEventListener("click", ()=>{
    playerChoice.src = "./images/1.png";
    randomVal = Math.floor(Math.random()*3+1);
    computerChoice.src = `./images/${randomVal}.png`;
    playerMove.innerHTML = "Rock";

    if(randomVal==1){   // R-R
        resultText.innerHTML = "DRAW";
        resultText.style.color = "blue";
        computerMove.innerHTML = "Rock";
    }
    else if(randomVal==2){  // R-P
        resultText.innerHTML = "You lose the game";
        resultText.style.color = "red";
        computerMove.innerHTML = "Paper";
    }
    else if(randomVal==3){  // R-S
        resultText.innerHTML = "You win the game";
        resultText.style.color = "green";
        computerMove.innerHTML = "Scissor";
    }
})
paperBtn.addEventListener("click", ()=>{
    playerChoice.src = "./images/2.png";
    randomVal = Math.floor(Math.random()*3+1);
    computerChoice.src = `./images/${randomVal}.png`;
    playerMove.innerHTML = "Paper";

    if(randomVal==1){   // P-R
        resultText.innerHTML = "You win the game";
        resultText.style.color = "green";
        computerMove.innerHTML = "Rock";
    }
    else if(randomVal==2){  // P-P
        resultText.innerHTML = "DRAW";
        resultText.style.color = "blue";
        computerMove.innerHTML = "Paper";
    }
    else if(randomVal==3){  // P-S
        resultText.innerHTML = "You lose the game";
        resultText.style.color = "red";
        computerMove.innerHTML = "Scissor";
    }
})
scissorBtn.addEventListener("click", ()=>{
    playerChoice.src = "./images/3.png";
    randomVal = Math.floor(Math.random()*3+1);
    computerChoice.src = `./images/${randomVal}.png`;
    playerMove.innerHTML = "Scissor";

    if(randomVal==1){   // S-R
        resultText.innerHTML = "You lose the game";
        resultText.style.color = "red";
        computerMove.innerHTML = "Rock";
    }
    else if(randomVal==2){  // S-P
        resultText.innerHTML = "You win the game";
        resultText.style.color = "green";
        computerMove.innerHTML = "Paper";
    }
    else if(randomVal==3){  // S-S
        resultText.innerHTML = "DRAW";
        resultText.style.color = "blue";
        computerMove.innerHTML = "Scissor";
    }
})