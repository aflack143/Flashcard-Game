const playingTable = document.querySelector(".playingTable");

// playingTable.addEventListener("click", function() {
    //     playingTable.classList.toggle("flip");
    // });
const eachCard = document.querySelectorAll(".flipCard");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockTable = false;
const winTone = new Audio('Sound/chime.mp3');
const winSportsTone = new Audio('Sound/golf-clap2.wav');
const tryAgainTone = new Audio('Sound/shake2.wav');
const flipDinosTone = new Audio('Sound/dinoGrowl.wav');
const flipTone = new Audio('Sound/shake.wav');
const soundBtn = document.querySelector(".soundBtn")
const soundOff = document.querySelector(".off")
const newGameBtn = document.querySelector(".button.newGameBtn");
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

// newGameBtn.addEventListener("click", resetTable);


soundBtn.addEventListener("click", () => {
    soundBtn.classList.toggle("off");
    console.log(soundBtn.classList.contains("off"))
    if (soundBtn.classList.contains("off")) {
        soundBtn.innerHTML = "OFF";
    } else {
        soundBtn.innerHTML = "ON";
    }
})

function flipCard() {
    // this.classList.toggle("flip"); 
    if (lockTable) return;
    if (this === firstCard) return;
    this.classList.add('flip');
    if (!hasFlippedCard) {
        if (!soundBtn.classList.contains("off")) {
            flipTone.play();
        }
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    if (!soundBtn.classList.contains("off")) {
        flipTone.play();
    }
    checkforMatch();
}


function checkforMatch() {

    let isMatch = firstCard.dataset.cardset === secondCard.dataset.cardset;
    isMatch ? disableCards() : unflipCards();
    return attemptedMatches.innerHTML = matchAttempts++;
    // if (firstCard.dataset.cardset === secondCard.dataset.cardset){
        //     disableCards();
        //     return;
        // }
        // unflipCards()
    }
    
    function disableCards() {
        firstCard.style.border = "thick solid #00ff2a";
        firstCard.style.borderRadius = "15px";
        secondCard.style.border = "thick solid #00ff2a";
        secondCard.style.borderRadius = "15px";
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetTable();
        if (!soundBtn.classList.contains("off")) {
            // if (!sportsImg.classList.contain("display")) {
                winTone.play(); 
            // } else {
                // winSportsTone.play();
        }
        return pairedMatches.innerHTML = matchedPairs++;
}

function unflipCards() {
    lockTable = true;
    if (!soundBtn.classList.contains("off")) {
        flipDinosTone.play();
    }
    firstCard.style.border = "thick solid red";
    firstCard.style.borderRadius = "15px";
    secondCard.style.border = "thick solid red";
    secondCard.style.borderRadius = "15px";
    setTimeout(() => {
        firstCard.style.border = "";
        secondCard.style.border = "";
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetTable();
        
    }, 1000);
}

function resetTable() {
    [hasFlippedCard, lockTable] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    eachCard.forEach(card => {
        let cardShuffle = Math.floor(Math.random()*eachCard.length); 
        card.style.order = cardShuffle;
    });
})();

eachCard.forEach(card => card.addEventListener("click", (flipCard)));



dinosButton.addEventListener("click", () => {
    dinosImg.forEach(dinoBack => {
        dinoBack.classList.add("display");
    });
    colorsImg.forEach(colorBack => {
        colorBack.classList.add("hidden");
        colorBack.classList.remove("display")
    });
    sportsImg.forEach(sportsBack => {
        sportsBack.classList.add("hidden");
        sportsBack.classList.remove("display")
    });
});

colorsButton.addEventListener("click", () => {
    colorsImg.forEach(colorBack => {
        colorBack.classList.add("display")
    });
    dinosImg.forEach(dinoBack => {
        dinoBack.classList.add("hidden");
        dinoBack.classList.remove("display");
    });
    sportsImg.forEach(sportsBack => {
        sportsBack.classList.add("hidden");
        sportsBack.classList.remove("display")
    });
});

sportsButton.addEventListener("click", () => {
    sportsImg.forEach(sportsBack => {
        sportsBack.classList.add("display");
    });
    colorsImg.forEach(colorBack => {
        colorBack.classList.add("hidden");
        colorBack.classList.remove("display")
    });
    dinosImg.forEach(dinoBack => {
        dinoBack.classList.add("hidden");
        dinoBack.classList.remove("display");
    });
});
