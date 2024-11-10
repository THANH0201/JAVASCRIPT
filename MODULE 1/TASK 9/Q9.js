/*
'use strict';

const target =document.querySelector('#target');


const result = ``;
target.innerHTML += result;
*/
'use strict';
const target =document.querySelector('#target');

let user_number = ~~prompt("Enter an integer number: ");
while(user_number <= 0) {
  user_number = ~~prompt("Enter an positive integer number: ");
}
  if (user_number % 2 === 0 && user_number !== 2) {
    target.innerHTML = `${user_number} is not a prime number.`;
  } else if (user_number === 1 || user_number === 2) {
    target.innerHTML = `${user_number} is a prime number.`;
  } else
      for (let number = 3; number <= 10; number += 2) {
        if (user_number % number === 0) {
          target.innerHTML = `${user_number} is not a prime number.`;
        } else if (user_number % number !== 0) {
          target.innerHTML = `${user_number} is a prime number.`;
        }
      }





//const result = ``;
//target.innerHTML = result;
