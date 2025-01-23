let box = document.querySelectorAll(".box");
let bg1 = document.querySelectorAll(".bg1");
let bg2 = document.querySelectorAll(".bg2");
let bg3 = document.querySelectorAll(".bg3");
let bg4 = document.querySelectorAll(".bg4");
let color = document.querySelectorAll(".color");
let border = document.querySelectorAll(".border");
let mode = document.querySelectorAll(".mode");

let modeBtn = document.querySelector(".mode");

modeBtn.addEventListener("click", () =>{
    if (modeBtn.textContent == "Dark Mode"){
        box.forEach((Element) =>{
            Element.classList.add("darkbox");
        });
        bg1.forEach((Element) =>{
            Element.classList.add("darkbg1");
        });
        bg2.forEach((Element) =>{
            Element.classList.add("darkbg2");
        });
        bg3.forEach((Element) =>{
            Element.classList.add("darkbg3");
        });
        bg4.forEach((Element) =>{
            Element.classList.add("darkbg4");
        });
        color.forEach((Element) =>{
            Element.classList.add("darkcolor");
        });
        border.forEach((Element) =>{
            Element.classList.add("darkborder");
        });
        mode.forEach((Element) =>{
            Element.classList.add("darkmode");
        });

        modeBtn.textContent = "Light Mode"

    }
    else {
        box.forEach((Element) =>{
            Element.classList.remove("darkbox");
        });
        bg1.forEach((Element) =>{
            Element.classList.remove("darkbg1");
        });
        bg2.forEach((Element) =>{
            Element.classList.remove("darkbg2");
        });
        bg3.forEach((Element) =>{
            Element.classList.remove("darkbg3");
        });
        bg4.forEach((Element) =>{
            Element.classList.remove("darkbg4");
        });
        color.forEach((Element) =>{
            Element.classList.remove("darkcolor");
        });
        border.forEach((Element) =>{
            Element.classList.remove("darkborder");
        });
        mode.forEach((Element) =>{
            Element.classList.remove("darkmode");
        });

        modeBtn.textContent = "Dark Mode"
    }
})


const btn1 = document.querySelector(".rock");
const btn2 = document.querySelector(".paper");
const btn3 = document.querySelector(".scissor");
const yourimage = document.querySelector(".you-result");
const compimage = document.querySelector(".comp-result");
const computerChoices = ['rock1.png', 'paper1.png', 'scisor1.png'];

let wins = 0 ;
let losses = 0 ;
let draws = 0 ;
let rounds = 0 ;

function showResult() {
    document.getElementById("win").innerText = `Wins: ${wins}`;  
    document.getElementById("lose").innerText = `Losses: ${losses}`;  
    document.getElementById("draw").innerText = `Draws: ${draws}`;
    document.getElementById("round").innerText = rounds;
}

function game(playerChoice) {
    rounds++;  
    let computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];  


     
    compimage.style.backgroundImage = `url(${computerChoice})`;
    compimage.style.backgroundColor = `white`; 

    
    if (playerChoice === computerChoice) {
        draws++;  
        document.getElementById("resultText").innerText = "It's a Draw!";  
    } else if (
        (playerChoice === 'rock1.png' && computerChoice === 'scisor1.png') ||
        (playerChoice === 'paper1.png' && computerChoice === 'rock1.png') ||
        (playerChoice === 'scisor1.png' && computerChoice === 'paper1.png')
    ) {
        wins++;  
        document.getElementById("resultText").innerText = "You Win!";  
    } else {
        losses++; 
        document.getElementById("resultText").innerText = "You Lose!";  
    }

    showResult();  
}

btn1.addEventListener("click", () => {
    yourimage.style.backgroundImage = `url("rock2.png")`; 
    game('rock1.png')
});  
btn2.addEventListener("click", () => {
    yourimage.style.backgroundImage = `url("paper2.png")`;
    game('paper1.png')
}); 
btn3.addEventListener("click", () => {
    yourimage.style.backgroundImage = `url("scisor_2.png")`
    game('scisor1.png');
});