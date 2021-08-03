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

let w=0, l=0, t=0;
const buttons = document.querySelectorAll('input');
let p1 = document.querySelector('.para1');
let p2 = document.querySelector('.para2');
let p3 = document.querySelector('.para3');
const playAgain = document.createElement('button');
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const playAgainp = document.createElement('p');
const audio = document.querySelector('.stefan');
const igzo = document.querySelector('.igzo')
const miki = document.querySelector('.miki');
const bgmusic = document.querySelector('.bgmusic');
igzo.volume = 0.5;
bgmusic.volume = 0.3;
miki.volume = 0.2;
playAgain.classList.add('playAgain');
playAgainp.classList.add('playAgainp')
playAgainp.textContent = 'Play Again?';
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        bgmusic.play();
        bgmusic.loop == true;
        h2.remove();
        h1.remove();
        p1.textContent = playRound(button.value, computerPlay());
        p2.textContent = "You: " + w + " Computer: " + l;
        if(w==5){
            p3.textContent = "Congrats, you are the WINNER!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied";
            playAgain.style.display = "";
            playAgainp.style.display = "";
            w=0;
            l=0;
            t=0;
            buttons.forEach(button =>{
                button.disabled = true;
            })
            container.appendChild(playAgain);
            container.appendChild(playAgainp);
            playAgain.addEventListener('click', function(){
                buttons.forEach(button =>{
                    button.disabled = false;
                    p1.textContent = "";
                    p2.textContent = "";
                    p3.textContent = "";
                    playAgain.style.display = "none";
                    playAgainp.style.display = "none";
                    igzo.play();
                })
            })
            miki.play();
        }
        else if(l==5){
            p3.textContent = "Unlucky, you are the LOSER!\n\nYour score is:\n" + w + " wins\n" + l + " loses\n" + t + " tied";
            playAgain.style.display = "";
            playAgainp.style.display = "";
            w=0;
            l=0;
            t=0;
            buttons.forEach(button =>{
                button.disabled = true;
            })
            container.appendChild(playAgain);
            container.appendChild(playAgainp);
            playAgain.addEventListener('click', function(){
                buttons.forEach(button =>{
                    button.disabled = false;
                    p1.textContent = "";
                    p2.textContent = "";
                    p3.textContent = "";
                    playAgain.style.display = "none";
                    playAgainp.style.display = "none";
                    igzo.play();
                })
            })
            audio.play();
        }
    })
})
