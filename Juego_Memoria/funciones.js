document.addEventListener('DOMContentLoaded', () => {
//card options
const cardArray = [
    {
        name: 'img1',
        img: 'imagenes/img_1.jpg'
    },
    {
        name: 'img2',
        img: 'imagenes/img_2.jpg'
    },
    {
        name: 'img3',
        img: 'imagenes/img_3.jpg'
    },
    {
        name: 'img4',
        img: 'imagenes/img_4.jpg'
    },
    {
        name: 'img5',
        img: 'imagenes/img_5.jpg'
    },
    {
        name: 'img6',
        img: 'imagenes/img_6.jpg'
    },
    {
        name: 'img1',
        img: 'imagenes/img_1.jpg'
    },
    {
        name: 'img2',
        img: 'imagenes/img_2.jpg'
    },
    {
        name: 'img3',
        img: 'imagenes/img_3.jpg'
    },
    {
        name: 'img4',
        img: 'imagenes/img_4.jpg'
    },
    {
        name: 'img5',
        img: 'imagenes/img_5.jpg'
    },
    {
        name: 'img6',
        img: 'imagenes/img_6.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.tablero')
const resultDisplay = document.querySelector('.aciertos')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imagenes/img_Interrogación.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Has hecho clic en la misma imagen!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Encontraste una coincidencia')
        cards[optionOneId].setAttribute('src', 'imagenes/img_Chulo.jpg')
        cards[optionTwoId].setAttribute('src', 'imagenes/img_Chulo.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'imagenes/img_Interrogación.jpg')
        cards[optionTwoId].setAttribute('src', 'imagenes/img_Interrogación.jpg')
        alert('Intenta de nuevo')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = '¡Felicidades! ¡Los encontraste todos!'
    }
}

//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
})