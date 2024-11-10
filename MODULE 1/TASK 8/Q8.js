'use strict';
const target =document.querySelector('#target');

const startyear =prompt('Enter a starting year');
const endyear =prompt('Enter a ending year');

target.innerHTML = `<span style="color:red">The leap years are:</span>`
for(let i = startyear; i <= endyear; i++) {
  if(i % 4 === 0 && i % 100 !==0 ||i % 400 === 0) {
    const result = `<ul><li>${i}</li></ul>`;
    target.innerHTML += result;
  }
}


