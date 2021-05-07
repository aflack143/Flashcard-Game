# Flashcard-Game

Thank you for playing my 1st game creation. My inspiration for this game is my 2 children, and their love for playing card games as a family.   

Within this game I will demonstrate the skills I have learned from the **General Assemb.ly (GA) program** (thanks to my wonderful employer **Guardian Life Insurance Company**), using _HTML_, _CSS_, and _Javascript_.  

## Description:
For this game, goal is to match all the cards, flipping over 2 cards at a time.

## Brief Example:
Screenshot of the program in use:
![Game screenshot](https://user-images.githubusercontent.com/80013194/117393174-2ce01d80-aeb9-11eb-94a8-6557e86ccf54.png)
  
## Features:
**_Bronze_**:
* Easy mode = 4 x 4 (16 cards)
* Deck type = colors (full fill of block – type word of color)
* Keep the cards flipped when they are matched
  
**_Silver_**:
* Medium/Hard modes = 30-36 cards and 56-64 cards
* Additional Deck types = #’s, shapes, sports, dinosaurs
* Scorecard : # of attempts / # of matches
* Button for new game
  
**_Gold_**:
* Sound = ding for success (or something else fun)
* Color = add color around card for matches
* Animation = shake card if incorrect match
* Scoring = adding score for each matched card, deducting for incorrect matches.
  * Or something similar to when playing solitaire – will need to look up good scoring methods
* Timer = giving bonus score (if completed within a certain time frame (ratio?)
* Button for giving a hint to a unflipped pair
* Running results:
  * Total Wins
  * Total Games
  * % of Wins
  * Best Score
  * Reset History to 0

## Technologies Used:
For this project, we were guided to using HTML5, CSS, and "vanilla" JS to create our game.
For this game, primarily used Visual Studio Code and Chrome Dev Tools.

## Getting Started:
Before beginning the project, 2 things were needed:
1. Initial concept (write up in the README for what your planning to create, and your goals)
2. A wireframe was drawn of the basic layout to focus plans.  

Initial coding began with building the HTML for beginning code for a 4x4 card layout board (16 cards / divs)
_If using "data-*" you must make sure the descriptor (* = descriptor) is all lowercase, no matter what! It will not register if there is any capital letters._  
Determined that sections should be on the left and right side of the board, so created aside sections to begin a flexbox look.  
With minimal information on the HTML (this is mostly just links and divs to provide the box needed for each flip card.), I began to layout basic CSS coding to build the container and playing table shape in the middle.  
To learn how to make a flipcard, I followed a tutorial listed below (refer to: Make a flip-card).  This gave great advise and additional features that could be added to the cards (ie using 540deg spin instead of 180deg, for a more animated look - I used the -180deg spin).


## Contribution Guidelines:
### Sources: 
[Make a flip-card](https://www.youtube.com/watch?v=Lc6wyl1KdOc)

[Locking grid to flip](https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae) 
[_Same author, second link found in search_]( https://marina-ferreira.github.io/tutorials/js/memory-game/)

[Adding Audio](https://www.codegrepper.com/code-examples/javascript/how+to+play+sounds+vanilla+js)

[Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
  condition ? expression/function if true : expression/function if false 
    Example:
 ```js   
    if (firstCard.dataset.cardset === secondCard. dataset.cardset){
    disableCards();
    return;
    }
    unflipCards()}
    /* Can be rewritten into these 2 lines: */
    let isMatch = firstCard.dataset.cardset === secondCard.dataset.cardset;
    isMatch ? disableCards() : unflipCards();
```    
    
 [**Project repository link**](https://github.com/aflack143/Flashcard-Game)
