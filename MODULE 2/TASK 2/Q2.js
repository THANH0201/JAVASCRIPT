'use strict';
const target = document.querySelector('#target');

const numParticipant = ~~prompt('How many participate are there')

function getNameList() {
  let list = [];
  for (let i = 0; i < numParticipant; i++) {
    const name = prompt(`Enter name of Participate number: ${i + 1}`);
    list.push(name);
    list.sort();
  }
  for (let j of list.sort()) {
    const result = `<li>${j}</li>`;
    target.innerHTML += result;
    }
}
getNameList()



