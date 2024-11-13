'use strict';
const target = document.querySelector('#target');

function getList() {
  let list = [];
  while (true){
    const numbers = ~~prompt(`Enter the numbers, enter 0 to stop.`);
      if (numbers === 0){
        break;
      }
    list.push(numbers);
    list.sort();
    list.sort().reverse();
    }
    console.log(list.sort().reverse());
    for (let j of list.sort().reverse()) {
    const result = `<li>${j}</li>`;
    target.innerHTML += result;
    }
}

getList()



