// const playingTable = document.querySelector(".playingTable");

// playingTable.addEventListener("click", function() {
//     playingTable.classList.toggle("flip");
// });


const eachCard = document.querySelectorAll(".flipCard");
eachCard.forEach(card => card.addEventListener("click", flipCard));
function flipCard() {
    this.classList.toggle("flip"); 
}
