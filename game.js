//adding use strict globally
"use strict";
let guessBtn = document.getElementById("submitBtn");
// Code for game
//Code for guessing game with random number generator
let randNum = 0;

function getRandomNum(e) {//generating random number
    const gamePar = document.createElement("p");
    document.getElementById("game").appendChild(gamePar);
    e.preventDefault();
    randNum = Math.floor(Math.random() * 10) + 1;
    let guess = document.getElementById('guess');
    if (guess.value == randNum) {
        let win = document.createTextNode("You Win!");
        gamePar.appendChild(win);

    } else {
        gamePar.innerHtml = "You Lose."
        let lose = document.createTextNode("You Lose.");
        gamePar.appendChild(lose);
    }
    //hiding Guess after 30 Seconds
    function hideGuess() {
        gamePar.style.display = "none";
        document.getElementById("gameForm").reset();
    }
    setTimeout(hideGuess, 30000)
}
//event listener for guess button
guessBtn.addEventListener('click', getRandomNum);