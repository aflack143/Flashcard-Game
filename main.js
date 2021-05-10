const playingTable = document.querySelector(".playingTable");
const winnerMessage = document.querySelector("#winnerContainer");
const eachCard = document.querySelectorAll(".flipCard");
const pairCards = document.querySelectorAll(".matchedSet");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockTable = false;
const winTone = new Audio('Sound/chime.mp3');
const winDinosTone = new Audio('Sound/dinoRoaring.wav');
const winSportsTone = new Audio('Sound/golf-clap2.wav');
const tryAgainTone = new Audio('Sound/jingle.wav');
const tryAgainDinosTone = new Audio('Sound/dinoTric.wav');
const tryAgainSportsTone = new Audio('Sound/whistle.wav');
const flipTone = new Audio('Sound/shake.wav');
const flipDinosTone = new Audio('Sound/dinoGrowl.wav');
const flipSportsTone = new Audio('Sound/ding.wav');
const soundBtn = document.querySelector(".soundBtn")
const soundOff = document.querySelector(".off")
const newGameBtn = document.querySelector(".newGameBtn");
const colorsButton = document.querySelector(".button.colors");
const dinosButton = document.querySelector(".button.dinos");
const sportsButton = document.querySelector(".button.sports");
const colorsImg = document.querySelectorAll("img.colors");
const dinosImg = document.querySelectorAll("img.dinos");
const sportsImg = document.querySelectorAll("img.sports");
const attemptedMatches = document.querySelector("#attempts")
const pairedMatches = document.querySelector("#matches")
let matchAttempts = 1;
let matchedPairs = 1;
let gamesPlayed = 0;
const totalGames = document.querySelector("#totalGames")
const easyButton = document.querySelector("#easy");
const mediumButton = document.querySelector("#medium");
const hardButton = document.querySelector("#hard");

let gameMode = "easy";

/* Game Mode */

easyButton.addEventListener("click", () => {
    for (let i=0; i<16; i++) {
            eachCard[i].classList.add("display");
            eachCard[i].classList.add("easy");
            eachCard[i].classList.remove("hidden");
            eachCard[i].classList.remove("hard");
            eachCard[i].classList.remove("medium");
        }
    for (let i=16; i < eachCard.length; i++) {
            eachCard[i].classList.remove("display");
            eachCard[i].classList.add("hidden");
        }
    gameMode = "easy";
    reset();
});

mediumButton.addEventListener("click", () => {
    for (let i=0; i<30; i++) {
            eachCard[i].classList.add("display");
            eachCard[i].classList.add("medium");
            eachCard[i].classList.remove("hidden");
            eachCard[i].classList.remove("hard");
            eachCard[i].classList.remove("easy");
        }
    for (let i=30; i < eachCard.length; i++) {
            eachCard[i].classList.remove("display");
            eachCard[i].classList.add("hidden");
        }
    gameMode = "medium";
    reset();
});


hardButton.addEventListener("click", () => {
    eachCard.forEach(indCard => {
        indCard.classList.add("display");
        indCard.classList.add("hard");
        indCard.classList.remove("hidden");
        indCard.classList.remove("easy");
        indCard.classList.remove("medium");
    });
    gameMode = "hard";
    reset();
});


newGameBtn.addEventListener("click", () => {
    reset();
});

const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");

yesBtn.addEventListener("click", () => {
    reset();
});
noBtn.addEventListener("click", () => {
    winnerMessage.classList.add("hidden");
});

function reset() {
    attemptedMatches.innerHTML = 0;
    pairedMatches.innerHTML = 0;
    matchAttempts = 1;
    matchedPairs = 1;
    hasFlippedCard = false;
    firstCard, secondCard;
    lockTable = false;
    winnerMessage.classList.add("hidden")
    eachCard.forEach(card => {
        card.classList.remove("flip");
        card.classList.add("reset");
        card.addEventListener("click", flipCard);
        card.style.border = "inherit";
        card.style.borderRadius = "inherit"
    });
    cardShuffle();
}

function cardShuffle() {
    eachCard.forEach(card => {                   
        let cardShuffle = Math.floor(Math.random()*eachCard.length); 
        card.style.order = cardShuffle;
    });
    gamesPlayed++;
    return currentGamesTotal.innerHTML = gamesPlayed;
}
/* ^ End of Game Mode Selection ^ */

/* Sound Functions */
soundBtn.addEventListener("click", () => {
    soundBtn.classList.toggle("off");
    console.log(soundBtn.classList.contains("off"))
    if (soundBtn.classList.contains("off")) {
        soundBtn.innerHTML = "OFF";
    } else {
        soundBtn.innerHTML = "ON";
    }
})
let theme = "colors";

function matchedSound() {
    if (soundBtn.classList.contains("off")) {
        return;
    } else if (theme === "sports") {
        winSportsTone.play();
    }else if (theme === "dinos") {
        winDinosTone.play();
    } else {
        winTone.play();
    }
}
  
function cardFlipSound() {     
    if (soundBtn.classList.contains("off")) {
        return;
    } else if (theme === "sports") {
        flipSportsTone.play();
    }else if (theme === "dinos") {
        flipDinosTone.play();
    } else {
        flipTone.play();
    }
}
            
function notMatchedSound() {
    if (soundBtn.classList.contains("off")) {
        return;
    } else if (theme === "sports") {
        tryAgainSportsTone.play();
    }else if (theme === "dinos") {
        tryAgainDinosTone.play();
    } else {
        tryAgainTone.play();
    }
}
/* ^ End of Sound Functions ^ */

/* Game Play functions */
function flipCard() {
    eachCard.forEach(card => {
        card.classList.remove("reset");
    }); 
    cardFlipSound();
    if (lockTable) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    attemptedTotalMatches()
    checkforMatch();
}

function attemptedTotalMatches() {
    return attemptedMatches.innerHTML = matchAttempts++;
}
function pairTotalMatches() {
    return pairedMatches.innerHTML = matchedPairs++;
}
    
function checkforMatch() {     
    let isMatch = firstCard.dataset.cardset === secondCard.dataset.cardset;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.style.border = "thick solid #00ff2a";
    firstCard.style.borderRadius = "15px";
    secondCard.style.border = "thick solid #00ff2a";
    secondCard.style.borderRadius = "15px";
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    matchedSound();
    pairTotalMatches();
    resetTable();
    lastFlippedCard();
};


function unflipCards() {
    lockTable = true;
    firstCard.style.border = "thick solid red";
    firstCard.style.borderRadius = "15px";
    secondCard.style.border = "thick solid red";
    secondCard.style.borderRadius = "15px";
    setTimeout(() => {
        notMatchedSound();
        firstCard.style.border = "";
        secondCard.style.border = "";
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetTable();                
    }, 700);
}

function resetTable() {
    [hasFlippedCard, lockTable] = [false, false];
    [firstCard, secondCard] = [null, null];
}
                        
(cardShuffle());
          
eachCard.forEach(card => card.addEventListener("click", (flipCard)));



/* THEME Buttons */
dinosButton.addEventListener("click", () => {  
    theme = "dinos";            
    dinosImg.forEach(dinoBack => {
        dinoBack.classList.add("display");
        dinoBack.classList.remove("hidden");
    });
    colorsImg.forEach(colorBack => {
        colorBack.classList.add("hidden");
        colorBack.classList.remove("display");
    });
    sportsImg.forEach(sportsBack => {
        sportsBack.classList.add("hidden");
        sportsBack.classList.remove("display");
    });
});

colorsButton.addEventListener("click", () => {
    theme = "colors";
    colorsImg.forEach(colorBack => {
        colorBack.classList.add("display");
        colorBack.classList.remove("hidden");
    });
    dinosImg.forEach(dinoBack => {
        dinoBack.classList.add("hidden");
        dinoBack.classList.remove("display");
    });
    sportsImg.forEach(sportsBack => {
        sportsBack.classList.add("hidden");
        sportsBack.classList.remove("display");
    });
});

sportsButton.addEventListener("click", () => {
    theme = "sports";
    sportsImg.forEach(sportsBack => {
        sportsBack.classList.add("display");
        sportsBack.classList.remove("hidden");
    });
    colorsImg.forEach(colorBack => {
        colorBack.classList.add("hidden");
        colorBack.classList.remove("display");
    });
    dinosImg.forEach(dinoBack => {
        dinoBack.classList.add("hidden");
        dinoBack.classList.remove("display");
    });
});

const standardButton = document.querySelector(".standard");
const smokeyButton = document.querySelector(".smokey");
const galaxyButton = document.querySelector(".galaxy");
const woodButton = document.querySelector(".wood");
const brickButton = document.querySelector(".brick");

standardButton.addEventListener("click", () => {
    playingTable.classList.remove("smokey");
    playingTable.classList.remove("galaxy");
    playingTable.classList.remove("wood");
    playingTable.classList.remove("brick");
});

smokeyButton.addEventListener("click", () => {
    playingTable.classList.add("smokey");
    playingTable.classList.remove("galaxy");
    playingTable.classList.remove("wood");
    playingTable.classList.remove("brick");
});

galaxyButton.addEventListener("click", () => {
    playingTable.classList.remove("smokey");
    playingTable.classList.add("galaxy");
    playingTable.classList.remove("wood");
    playingTable.classList.remove("brick");
});

woodButton.addEventListener("click", () => {
    playingTable.classList.remove("smokey");
    playingTable.classList.remove("galaxy");
    playingTable.classList.add("wood");
    playingTable.classList.remove("brick");
});

brickButton.addEventListener("click", () => {
    playingTable.classList.remove("smokey");
    playingTable.classList.remove("galaxy");
    playingTable.classList.remove("wood");
    playingTable.classList.add("brick");
});
/* End of THEME Buttons ^ */

function endGameNow() {
    eachCard.forEach(card => {
        card.classList.add("flip");
    }); 
}

function lastFlippedCard() { 
    if (gameMode === "easy") {
        if (pairedMatches.innerHTML === "8") {
            return winnerMessage.classList.remove("hidden"); }
    } else if (gameMode === "medium") {
        if (pairedMatches.innerHTML === "15") {
            return winnerMessage.classList.remove("hidden"); }
    } else if (gameMode === "hard") {
        if (pairedMatches.innerHTML === "24") {
            return winnerMessage.classList.remove("hidden"); }
}}