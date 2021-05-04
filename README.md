# Flashcard-Game

Thank you for playing my 1st game creation. My inspiration for this game is my 2 children, and their love for playing card games as a family.

Within this game I will demonstrate the skills I have learned from the General Assemb.ly (GA) program, using HTML, CSS, and Javascript.

Description:
For this game, goal is to match all the cards, flipping over 2 cards at a time.

Features:
Bronze:
•	Easy mode = 4 x 4 (16 cards)
•	Deck type = colors (full fill of block – type word of color)
•	Keep the cards flipped when they are matched
Silver:
•	Medium/Hard modes = 30-36 cards and 56-64 cards
•	Additional Deck types = #’s, shapes, sports, dinosaurs
•	Scorecard : # of attempts / # of matches
•	Button for new game

Gold:
•	Sound = ding for success (or something else fun)
•	Color = add color around card for matches
•	Animation = shake card if incorrect match
•	Scoring = adding score for each matched card, deducting for incorrect matches.
    o	Or something similar to when playing solitaire – will need to look up good scoring methods
•	Timer = giving bonus score (if completed within a certain time frame (ratio?)
•	Button for giving a hint to a unflipped pair
•	Running results:
    o	Total Wins
    o	Total Games
    o	% of Wins
    o	Best Score
    o	Reset History to 0




Sources: 
Make a flip-card: https://www.youtube.com/watch?v=Lc6wyl1KdOc
locking grid to flip: https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae / https://marina-ferreira.github.io/tutorials/js/memory-game/

Code: Conditional (ternary) operator condition ? expression/function if true : expression/function if false */
    Example:
    if (firstCard.dataset.cardcolor === secondCard. dataset.cardcolor){
    disableCards();
    return;
    }
    unflipCards()}

    Can be rewritten into these 2 lines:
    let isMatch = firstCard.dataset.cardcolor === secondCard.dataset.cardcolor;
    isMatch ? disableCards() : unflipCards();