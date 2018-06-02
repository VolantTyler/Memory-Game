# Memory Game Project

## Table of Contents

* [Purpose](#purpose)
* [Explanation](#explanation)
* [Modifications](#modifications)
* [Learning](#learning)

## Purpose

This second project of the Udacity Front-End Web Developer Nanodegree (FEND) instructed me to build a functional Javascript version of the Memory Game. Using provided HTML and CSS (with slight modifications), I created this Javscript program. 

In the game, the player clicks on a card to turn it over, then clicks a second card to turn that over. If both cards match, they stay flipped and change color. If they do not match, they both flip down. The game continues until all 16 cards are matched. At that point, a message announces that the game is won, the time to win, the star ranking of the player, and the number of moves to win. The player can then reset the game board and score panel with the click of a button.

## Explantion

Much of the code is self-explanatory, given titles and comments. A few elements bear explanation.

The game timer begins to run, not when the first card is clicked, because then the timer would re-initialize every time a card was clicked. Instead, I found the only event that happens a single time in the program: the moves counter becomes "1". At this point, and only this point, the timer begins ticking.

Every pair of flipped cards is added to the openCards array. If they match, they is pushed to the matchedCards array. The openCards array clears frequently throughout the game, but the matchedCards array grows with each matched pair added to it. When all eight pairs of cards are added, when the length of the array is 16, the game knows that the win condition has been met.

I used several setTimeout's to delay checking for a match or declaring victory until after both cards were flipped.

## Modifications

I made a few modifications to the starter code.

* I added a viewport meta to the HTML, and the current jQuery library.
* I modified the score panel to include a timer
* I shortened the width of the score panel to accomodate the smallest popular smartphone screens
* I added @media queries to width, height and padding on the deck and card classes, to accomodate smartphone and tablet screens.

## Learning

I learned a great deal in this project. One of the greatest lessons was from the time I took to build out an extensive flow-chart of behaviors, before I began coding. I could refer to and add to this resource throughout, to keep my bearings.

I came to better understand functional programming, variable assignment and scope, arrays, DOM manipulation.

This project was an excellent test of my learning thus far. I am proud of what I have built.