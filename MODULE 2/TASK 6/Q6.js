'use strict';
const target = document.querySelector('#target');

function diceRoll() {
  let list = [];
  while (true) {
    const roll = Math.floor(Math.random() * 6) + 1;

    if (roll === 6) {
//      alert(``);//displays an alert box with a message and an OK button.
      break;
    }
    list.push(roll);
  }
  for (let j of list) {
    const result = `<li>${j}</li>`;
    target.innerHTML += result;
  }
}
diceRoll()



