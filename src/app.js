/* eslint-disable */
import "./style.css";

const Suits = ["♠", "♣", "♦", "♥"];

const Values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

//input options
Values.forEach(value => {
  let option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerHTML = value;

  document.querySelector("#selectValue").appendChild(option);
});

Suits.forEach(symbol => {
  let input = document.createElement("input");
  input.setAttribute("name", "selectSuit");
  input.setAttribute("type", "radio");
  input.setAttribute("value", symbol);
  input.style.margin = "0px 20px";

  document.querySelector("#selectSuit").appendChild(input);
  input.insertAdjacentText("afterend", symbol);
});

//functions

//random card generator
const randomCardGen = () => {
  //suit
  let cardSuit = document.querySelectorAll(".suit");
  let activeSuit = Suits[Math.floor(Math.random() * 4)];
  cardSuit.forEach(element => (element.innerHTML = activeSuit));

  //color
  activeSuit == "♦" || activeSuit == "♥"
    ? cardSuit.forEach(element => (element.style.color = "red"))
    : cardSuit.forEach(element => (element.style.color = "black"));

  //value
  let activeValue = document.querySelector("#cardValue");
  activeValue.innerHTML = Values[Math.floor(Math.random() * 14)];
};

//select card value
const chooseCardValue = event => {
  let activeValue = event.target.value;
  let cardValue = document.querySelector("#cardValue");

  cardValue.innerHTML = activeValue;
};

//select card suit
const chooseCardSuit = event => {
  let activeSuit = event.target.value;
  let cardSuit = document.querySelectorAll(".suit");

  cardSuit.forEach(element => (element.innerHTML = activeSuit));

  //color
  activeSuit == "♦" || activeSuit == "♥"
    ? cardSuit.forEach(element => (element.style.color = "red"))
    : cardSuit.forEach(element => (element.style.color = "black"));
};

//events

//refresh
window.onload = function() {
  randomCardGen();
};

//button
document.querySelector("#randomCardButton").onclick = function() {
  randomCardGen();
};

//dropdown menu - value
document.querySelector("#selectValue").onchange = function() {
  chooseCardValue(event);
};

//radio selection - suit
document.querySelector("#selectSuit").onchange = function() {
  chooseCardSuit(event);
};
