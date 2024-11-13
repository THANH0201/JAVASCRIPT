'use strict';
const target = document.querySelector('#target');

function diceRoll(sides) {
  let list = [];
  for (let i = 0; i < sides; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    list.push(roll);
    }

  for (let j of list) {
    const result = `<li>${j}</li>`;
    target.innerHTML += result;
  }
}
const sides = ~~prompt(`How many times do you want to roll? `);
diceRoll(sides)



