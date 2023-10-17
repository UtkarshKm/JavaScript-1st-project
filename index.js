// Initializing the player's details
let player = {
    name: "Utkarsh",
    chips: 200
}

// Initializing necessary variables for the game
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Retrieving necessary HTML elements
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Displaying the player's name and chips
playerEl.textContent = player.name + ": $" + player.chips

// Function to get a random card value
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10 // Assign 10 for Jack, Queen, and King
    } else if (randomNumber === 1) {
        return 11 // Ace is initially assigned 11 points
    } else {
        return randomNumber
    }
}

// Function to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Function to render the game state
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// Function to draw a new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
