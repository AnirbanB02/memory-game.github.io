document.addEventListener('DOMContentLoaded', () => {

  let cardArray = [
    {
      name: 'Apple',
      img: 'images/Apple.jpg'
    },
    {
      name: 'Apple',
      img: 'images/Apple.jpg'
    },
    {
      name: 'Amazon',
      img: 'images/Amazon.jpg'
    },
    {
      name: 'Amazon',
      img: 'images/Amazon.jpg'
    },
    {
      name: 'Adobe',
      img: 'images/Adobe.jpg'
    },
    {
      name: 'Adobe',
      img: 'images/Adobe.jpg'
    },
    {
      name: 'Google',
      img: 'images/Google.jpg'
    },
    {
      name: 'Google',
      img: 'images/Google.jpg'
    },
    {
      name: 'Samsung',
      img: 'images/Samsung.jpg'
    },
    {
      name: 'Samsung',
      img: 'images/Samsung.jpg'
    },
    {
      name: 'Tesla',
      img: 'images/Tesla.jpg'
    },
    {
      name: 'Tesla',
      img: 'images/Tesla.jpg'
    }
  ]

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  cardArray = shuffle(cardArray)


  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardChosen = []
  var cardChosenID = []
  var cardWon = []


  //board creation
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/Tiles.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check if the cards match
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneID = cardChosenID[0]
    const optionTwoID = cardChosenID[1]
    if (cardChosen[0] === cardChosen[1]) {
      resultDisplay.innerHTML = 'Matched'
      cards[optionOneID].setAttribute('src', 'images/Blank.jpg')
      cards[optionTwoID].setAttribute('src', 'images/Blank.jpg')
      cardWon.push(cardChosen)
    }
    else {
      cards[optionOneID].setAttribute('src', 'images/Tiles.jpg')
      cards[optionTwoID].setAttribute('src', 'images/Tiles.jpg')
      resultDisplay.innerHTML = 'Try again'
    }
    cardChosen = []
    cardChosenID = []
    // resultDisplay.textContent = cardWon.length
    if (cardWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congrats!!'
    }
  }

  //flip the card when clicked
  function flipCard() {
    var cardID = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardID].name)
    cardChosenID.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()




});