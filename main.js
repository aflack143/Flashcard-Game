const playingTable = document.querySelector(".playingTable");

// playingTable.addEventListener("click", function() {
    //     playingTable.classList.toggle("flip");
    // });
const eachCard = document.querySelectorAll(".flipCard");
const pairCards = document.querySelectorAll(".matchedSet");
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
const newGameBtn = document.querySelector("newGameBtn");
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

const easyButton = document.querySelector("#easy");
const mediumButton = document.querySelector("#medium");
const hardButton = document.querySelector("#hard");

/* Game Mode */

hardButton.addEventListener("click", () => {
    eachCard.forEach(indCard => {
        indCard.classList.add("display");
        indCard.classList.add("hard");
        indCard.classList.remove("hidden");
        indCard.classList.remove("easy");
        indCard.classList.remove("medium");
    });
    // shuffle();
});
/* My mind is trying to randomize the 48 divs (24 datasets)
then pull the 16 divs / 8 dataset || 30divs / 15 dataset || 48div / 24dataset - making sure there are 2 of each dataset and adding ".dispaly" class to those
then, any div not selected will need to have ".hidden" class added to them to hid from view */

// (function randCardShuffle() {                
//     pairCards.forEach(card => {                   
//         let randShuffle = Math.floor(Math.random()*pairCards.length); 
//         card.style.order = randShuffle;
//     });
// })();


/* ^ End of Game Mode Selection ^ */

// newGameBtn.addEventListener("click", () => {
//     eachCard.forEach(card => {
//         card.classList.remove("flip");
//     })
//     // let attemptedMatches.innerHTML = 0;
//     // let pairedMatches.innerHTML = 0;
//     shuffle();
// });


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

function matchedSound() {            
    if (!soundBtn.classList.contains("off")) {
        // if (!sportsImg.classList.contains("display")) {
        winSportsTone.play(); 
    // } else {
    //     winSportsTone.play();
    }   
}        
            
function cardFlipSound() {     
    if (!soundBtn.classList.contains("off")) {
        flipTone.play();
    }
}
            
function notMatchedSound() {
    if (!soundBtn.classList.contains("off")) {
        flipDinosTone.play();
    }
}
/* ^ End of Sound Functions ^ */


function flipCard() {
    // this.classList.toggle("flip"); 
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
    matchedSound();
    return pairedMatches.innerHTML = matchedPairs++;
}
        
function unflipCards() {
    lockTable = true;
    notMatchedSound();
            // if (!soundBtn.classList.contains("off")) {
                //     flipDinosTone.play();
                // }
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
    }, 700);
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



/* THEME Buttons */
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
/* End of THEME Buttons ^ */
