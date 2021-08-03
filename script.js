function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    if(randomNumber == 1){
        return "Rock";
    }
    else if(randomNumber == 2){
        return "Paper";
    }
    else if(randomNumber == 3){
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        t++;
        return "Tied! " + playerSelection + " ties with " + computerSelection + ".";
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        w++;
        return "You won! Rock beats Scissors.";
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        l++;
        return "You lost! Rock doesn't beat Paper.";
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        w++;
        return "You won! Paper beats Rock.";
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        l++;
        return "You lost! Paper doesn't beat Scissors.";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        w++;
        return "You won! Scissors beats Paper.";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        l++;
        return "You lost! Scissors doesn't beat Rock.";
    }
}

function game(){
    let computerPlay1, again="Yes";
        for(let i=0;i<5;i++){
            computerPlay1 = computerPlay();
            console.log(playRound(playerSelection, computerPlay1) + "\nYou: " + w + "\nComputer: " + l);
        }
        if(w>l){
            console.log("Congrats, you are the WINNER!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied");
        }
        else if(w==l){
            console.log("It is tied!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied");
        }
        else{
            console.log("Unlucky, you are the LOSER!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied");
        }
        w=0;
        l=0;
        t=0;
    }

let w=0, l=0, t=0;
const buttons = document.querySelectorAll('input');
let p1 = document.querySelector('.para1');
let p2 = document.querySelector('.para2');
let p3 = document.querySelector('.para3');
const playAgain = document.createElement('button');
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
playAgain.textContent = 'Play Again'
playAgain.classList.add('playAgain')
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        h2.remove();
        h1.remove();
        p1.textContent = playRound(button.value, computerPlay());
        p2.textContent = "You: " + w + " Computer: " + l;
        if(w==5){
            p3.textContent = "Congrats, you are the WINNER!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied";
            playAgain.style.display = "";
            w=0;
            l=0;
            t=0;
            buttons.forEach(button =>{
                button.disabled = true;
            })
            container.appendChild(playAgain);
            playAgain.addEventListener('click', function(){
                buttons.forEach(button =>{
                    button.disabled = false;
                    p1.textContent = "";
                    p2.textContent = "";
                    p3.textContent = "";
                    playAgain.style.display = "none";
                })
            })
        }
        else if(l==5){
            p3.textContent = "Unlucky, you are the LOSER!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied";
            playAgain.style.display = "";
            w=0;
            l=0;
            t=0;
            buttons.forEach(button =>{
                button.disabled = true;
            })
            container.appendChild(playAgain);
            playAgain.addEventListener('click', function(){
                buttons.forEach(button =>{
                    button.disabled = false;
                    p1.textContent = "";
                    p2.textContent = "";
                    p3.textContent = "";
                    playAgain.style.display = "none";
                })
            })
        }
    })
})
