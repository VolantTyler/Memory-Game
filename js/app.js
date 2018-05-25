
/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


 // assign variables
 //TODO: add "fa " to the front of each (must be both class attributes)
const allCards = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb", "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];
let openCards = []
let grid = $('ul.deck');


 //flip card on <li> click
 grid.on('click', 'li.card', function() {
    let currentCard = $(this);
    let cardSymbol = $(this).children('i')[0].getAttribute('class');

    currentCard.addClass('open show');
    openCards.push(cardSymbol);
    let anyOpenCard = $('li.open');


    if (openCards.length === 2) {
        if (openCards[0] === openCards[1]) {
            //remove 'open' add 'match
            anyOpenCard.addClass('match');
            anyOpenCard.removeClass('open');
            //erase array
            openCards = [];
        } else {
            setTimeout(myTimeout, 1000);
            //show negative animation before hide
            function myTimeout() {
            anyOpenCard.removeClass('open show');
            openCards = [];
            }
        }
    } else {
        //do nothing?
    }
//    let cardSymbol = $(this).children().getAttribute('class');
//    console.log(cardSymbol);
//    openCards.push(cardSymbol);
 }
);



