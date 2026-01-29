import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
  const cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const cardSuits = [{suit: "♦", color: "red"}, {suit: "♠", color: "black"}, {suit: "♥", color: "red"}, {suit: "♣", color: "black"}];

 function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
  }

  window.createCard = function createCard() {
    let card = {}
    let centerSuit = document.querySelector('.cardSuit')
    let cornerValues = document.querySelectorAll('.cardNumber')
    card.value = cardNumbers[getRandomIndex(cardNumbers)]
    let chosenSuit = cardSuits[getRandomIndex(cardSuits)]
    card.suit = chosenSuit.suit
    card.color = chosenSuit.color
    console.log(card)
    centerSuit.textContent = card.suit
    centerSuit.style.color = card.color
    cornerValues.forEach(element => {
      element.textContent = card.value + card.suit
      element.style.color = card.color
    });
    return card
  }

window.onload = function() {
  // i definitely know exactly what i'm doing

};
