'use strict';
const target =document.querySelector('#target');

const answer = confirm("Should I calculate the square root?").toString()

  if (answer === "true") {
    const number = ~~prompt("Enter a number");
    if (number >= 0) {
      const result = `<span style='color:blue'>The square root is ${Math.sqrt(number)}</span>`;
      target.innerHTML = result;
    }
    else {
      const result = `<span style='color:blue'>The square root of a negative number is not defined</span>`;
      target.innerHTML = result;
    }

  }
  else {
    const result = `<span style='color:blue'>The square root is not calculated</span>`;
    target.innerHTML = result;
  }




