'use strict';

const target =document.querySelector('#target');
const num1 = prompt("Enter the first number");
const num2 = prompt("Enter the second number");
const num3 = prompt("Enter the third number");
const sum = Math.sum(num1,num2,num3);
const result = `The sum of tree number is ${num1}, ${num2},${num3}:`;
target.innerHTML = result;


