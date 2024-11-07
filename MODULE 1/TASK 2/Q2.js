'use strict';

const target =document.querySelector('#target');
const name = prompt("What is your name");
const result = `Hello,<span style="color: blue;"> ${name}</span>!`;
target.innerHTML = result;