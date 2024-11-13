'use strict';
const target = document.querySelector('#target');

const n = ~~prompt('How many number do you want to enter?')

const numbers = [];
for (let i = 0; i < n; i++) {
  const user_number = prompt('Enter your numbers');
  numbers.push(user_number);
}
console.log(numbers)

const reverse = []
for (let j = 0; j < numbers.length; j++) {
  console.log(numbers[numbers.length-(j+1)])
  reverse.push(numbers[numbers.length-(j+1)]);
  const result = `<span style="color:blue">${reverse}`;// drop comma?
  target.innerHTML = result
}



