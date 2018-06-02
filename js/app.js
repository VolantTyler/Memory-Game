

 // assign variables
 const allCards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-leaf", "fa fa-bicycle", "fa fa-bomb"];
 const grid = $('ul.deck');
 let starTotal = 3;
 let s = 0;
 let m = 0;
 let movesCount = 0;
 let openCards = [];
 let matchedCards = [];
 let currentCard, cardSymbol, anyOpenCard, movesDisplay, varTimer;


//Functions

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

//increment moves counter
function movesPlusOne () {
    movesDisplay = $('span.moves');
    movesCount += 1;
    movesDisplay.replaceWith('<span class="moves">'+movesCount+'</span>');
    if (movesCount === 1) {
      varTimer = setInterval(startTimer, 1000);
    }
}

//remove star on score threshold
function minusStar () {
    $('ul.stars li:last-child').remove();
    starTotal -= 1;
  }

function hideCard() {
    currentCard.removeClass('open show');
    anyOpenCard.removeClass('open show');
    openCards = [];
  }

function checkMatch() {
  if (openCards[0] === openCards[1]) {
    //add open cards to matched cards array
    matchedCards.push.apply(matchedCards, openCards);
    //remove 'open' class add 'match' class
    anyOpenCard.addClass('match');
    anyOpenCard.removeClass('open');
    //erase array 
    openCards = []; 
  } else {
    setTimeout(hideCard, 500);
  } 
}

//add card to list of open cards
function holdCard() {
    openCards.push(cardSymbol);
}

function flipCard() {
  //if clicked card is hidden, show it
  if (!(currentCard.hasClass('open'))) {
    currentCard.addClass('open show');
    holdCard();
    anyOpenCard = $('li.open');

    if (openCards.length === 2) {
        checkMatch();
      //checkMatch contains 'else' statement
        }
      //if card is open/shown, hide it
    } else {
      hideCard();    
  }
}

function resetMovesCount() {
  movesCount = 0;
  movesDisplay = $('span.moves');
  movesDisplay.replaceWith('<span class="moves">'+movesCount+'</span>');
}

function resetStarsCount() {
  $('ul.stars li').remove();
  for (let i = 0; i < 3; i++) {
    $('ul.stars').append('<li><i class="fa fa-star"></i></li>');
  }
  starTotal = 3;
}

function resetTimer() {
  clearInterval(varTimer);
  m = 0;
  s = 0;
  document.getElementById("timer").innerHTML = m+':'+s;
}

function resetCards() {
  let i = 0;
  $('li.card').each(function(){
    $(this).append('<i class="'+allCards[i]+'"></i>');
    i++;
  });
}

//reset game board
function newGame() {
  //remove all symbols
  $('li.card i').remove();
  //flip all cards face down
  $('li.card').removeClass('open show match');
  matchedCards = [];
  openCards = [];
  resetMovesCount();
  resetStarsCount();
  resetTimer();
  shuffle(allCards);
  //place each card face down in new shuffled order
  resetCards();
}

//Timer
//parts of funcion learned from W3Schools https://www.w3schools.com/js/js_timing.asp
function startTimer() {
	s++;
  if (s === 60) {
    s = 0;
    m++;
  }
  document.getElementById("timer").innerHTML = m+':'+s;
}

function winCheck() {
  if (matchedCards.length === 16) {
    clearInterval(varTimer);
    winModal();
  } 
}

//Victory message - starter code from https://sweetalert.js.org/guides/ 
function winModal () {
  swal({
    title: 'You win!', 
    text: 'Score = '+movesCount+' / Stars = '+starTotal+' / Time = '+m+':'+s+'\n\n Do you want to play again?', 
    icon: "success",
    buttons: ["I'm done", "Play again"],
  })
  .then((playAgain) => {
    if (playAgain) {
      newGame();
    } else {
      return;
    }
});
}


//Click behavior
//reset game board when click restart button
$('.restart').on('click', newGame);

 //flip card on <li> click
 grid.on('click', 'li.card', function() {
  if ($(this).hasClass('show')) {
    return;
  } else {
    currentCard = $(this);
    cardSymbol = $(this).children('i')[0].getAttribute('class');
    movesPlusOne();
    flipCard();
    setTimeout(winCheck, 500); 

    //reduce stars at two move counts
    switch (movesCount) {
        case 17:
        case 19:
        minusStar();
      }
    } 
 });



