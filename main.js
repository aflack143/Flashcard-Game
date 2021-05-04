// const playingTable = document.querySelector(".playingTable");

// playingTable.addEventListener("click", function() {
//     playingTable.classList.toggle("flip");
// });


const eachCard = document.querySelectorAll(".flipCard");
let hasFlippedCard = false;
let firstCard, secondCard;
let lockTable = false;

function flipCard() {
    // this.classList.toggle("flip"); 
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
    let isMatch = firstCard.dataset.cardcolor === secondCard.dataset.cardcolor;
    isMatch ? disableCards() : unflipCards();
    // if (firstCard.dataset.cardcolor === secondCard.dataset.cardcolor){
    //     disableCards();
    //     return;
    // }
    // unflipCards()
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard); 
    resetTable();
}

function unflipCards() {
    lockTable = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetTable();
    }, 1000);
}

function resetTable() {
    [hasFlippedCard, lockTable] = [false, false];
    [firstCard, secondCard] = [null, null];
}

eachCard.forEach(card => card.addEventListener("click", flipCard));
