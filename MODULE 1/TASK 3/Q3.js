'use strict';

const target =document.querySelector('#target');

const num1 = ~~prompt("Enter the first number");
const num2 = ~~prompt("Enter the second number");
const num3 = ~~prompt("Enter the third number");

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3
const ave = sum/3
const result = `
<li> The sum of three intergers ${num1}, ${num2}, ${num3} is <span style="color: blue;">${sum}</span></li>
<li> The product of three intergers ${num1}, ${num2}, ${num3} is <span style="color: blue;">${product}</span></li>
<li> The average of three intergers ${num1}, ${num2}, ${num3} is <span style="color: blue;">${ave}</span></li>
`;
target.innerHTML = result;


