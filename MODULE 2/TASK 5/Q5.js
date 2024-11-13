'use strict';
const target = document.querySelector('#target');

function getList() {
  let list = [];
  while (true) {
    const numbers = ~~prompt(`Enter the numbers:`);
    const number = parseInt(numbers)//string to integer
    if (list.includes(number)) {
      alert(`The number ${number} is already exist.`);//displays an alert box with a message and an OK button.
      break;
    }
    list.push(numbers);
  }
  console.log(list.sort());
  for (let j of list.sort()) {
    const result = `<li>${j}</li>`;
    target.innerHTML += result;
  }
}
getList()



