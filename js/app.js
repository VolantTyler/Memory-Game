
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
 *  - display the card's symbol (put this functionality in another function that you call from this one) [X]
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one) [x]
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one) [x]
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one) [x]
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one) [X]
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one) [x]
 */


 // assign variables
const allCards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];
let openCards = [];
let matchedCards = [];
let grid = $('ul.deck'); //const?
let movesCount = 0;
let currentCard;
let cardSymbol;
let anyOpenCard;

//increment moves counter
function movesPlusOne () {
    let movesDisplay = $('span.moves');
    movesCount += 1;
    movesDisplay.replaceWith('<span class="moves">'+movesCount+'</span>');
    //TODO: divide movesCount by 2, count each click as move or each pair
}

//remove star on threshold
function minusStar () {
    $('ul.stars li:last-child').remove();
  }

function hideCard() {
  currentCard.removeClass('open show');
  anyOpenCard.removeClass('open show');
  openCards = []
};

function victory() {
  alert('You Win! Score = '+movesCount+'');
}


function checkMatch() {
  if (openCards[0] === openCards[1]) {
    matchedCards.push.apply(matchedCards, openCards);
    //remove 'open' add 'match
    anyOpenCard.addClass('match');
    anyOpenCard.removeClass('open');
    //erase array 
    openCards = []; 
    if (matchedCards.length === 16) {
      victory();
    } 
  } else {
    setTimeout(hideCard, 1000);
    //TODO: show negative animation/color before hide
  } 
}

//add card to list of open cards
function holdCard() {
    openCards.push(cardSymbol);
}

function flipCard() {
    if (!(currentCard.hasClass('open'))) {
        currentCard.addClass('open show');
        holdCard();
        anyOpenCard = $('li.open');

        if (openCards.length === 2) {
            checkMatch();
          //checkMatch contains 'else' statement
            }
        } else {
          hideCard();    
    }
}

function newGame() {
  $('li.card i').remove();
  shuffle(allCards);
  //for each li.class, add child <i> with class array
  let i = 0;
  $('li.card').each(function(){
    $(this).append('<i class="'+allCards[i]+'"></i>');
    i++;
  })
  console.log(allCards);
}

//click restart button
$('.restart').on('click', newGame);
//TODO: testing function on restart button, move to card-click

 //flip card on <li> click
 grid.on('click', 'li.card', function() {
    currentCard = $(this);
    cardSymbol = $(this).children('i')[0].getAttribute('class');
    movesPlusOne();
    flipCard();
    switch (movesCount) {
        case 17:
        case 19:
        case 21:
        minusStar();
      }
    } 
);



