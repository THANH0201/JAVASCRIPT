'use strict';
const target =document.querySelector('#target');

const startyear =prompt('Enter a starting year');
const endyear =prompt('Enter a ending year');
/*
let leap ='is not';

if(year % 4 === 0 && year % 100 !==0 ||year % 400 === 0) {
  leap = 'is';
}
 */
for(let i = startyear; i <= endyear; i++) {
  if(i % 4 === 0 && i % 100 !==0 ||i % 400 === 0) {
    const result = `<li>${i}</li>`;
    target.innerHTML += result;
  }
}


