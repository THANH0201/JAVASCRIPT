'use strict';
const target =document.querySelector('#target');

const year =prompt('Enter a year');

let leap ='is not';

if(year % 4 === 0 && year % 100 !==0 ||year % 400 === 0) {
  leap = 'is';
}

const result = `Year <span style='color:blue'>${year}</span> <span style="color:red">${leap}</span> a leap year`;

target.innerHTML = result;