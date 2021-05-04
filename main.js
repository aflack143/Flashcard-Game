const playingTable = document.querySelector(".playingTable");
let eachCard = playingTable.forEach;
playingTable.addEventListener("click", function() {
    playingTable.classList.toggle("flip");
});