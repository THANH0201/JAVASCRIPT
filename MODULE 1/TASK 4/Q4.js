'use strict';

//ask for name
const target =document.querySelector('#target');

const name = prompt("Enter your name");

const room = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]

const lottery = Math.floor(Math.random() * 4) +1;

  if(lottery === 1) {
    const result = `<span style="color:blue">${name}</span>, you are <span style="color:red">${room[0]}</span> .`
    target.innerHTML = result;
  }
  else if(lottery === 2) {
    const result = `<span style="color:blue">${name}</span>, you are <span style="color:red">${room[1]}</span> .`
    target.innerHTML = result;
  }
  else if(lottery === 3) {
    const result = `<span style="color:blue">${name}</span>, you are <span style="color:red">${room[2]}</span> .`
    target.innerHTML = result;
  }
  else {
    const result = `<span style="color:blue">${name}</span>, you are <span style="color:red">${room[3]}</span> .`
    target.innerHTML = result;
  }





