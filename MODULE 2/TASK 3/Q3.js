'use strict';
const target = document.querySelector('#target');

const numdogs = ~~prompt('How many dogs are there')

function getNameList() {
  let list = [];
  for (let i = 0; i < numdogs; i++) {
    const name = prompt(`Enter name of dog number: ${i + 1}`);
    list.push(name);
    list.sort();
    list.sort().reverse();
  }
  for (let j of list.sort().reverse()) {
    const result = `<li>${j}</li>`;
    target.innerHTML += result;
    }
}
getNameList()



