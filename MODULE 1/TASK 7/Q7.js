'use strict';

const target = document.querySelector('#target');

const user_answer = confirm("DO YOU WANT TO ROLL THE DICE?").toString()



  if (user_answer === "true") {
    const times = ~~prompt("How many times do you want to roll?");
    const dices =[]
    let dice;
    let sum = 0;
    for (let i = 0; i < times; i++) {
      dice = Math.floor(Math.random() * 6) + 1;
      dices.push(dice)
      console.log(dices);
      sum += dice;
      const result = `<li> The points of ${times} dice rolls are ${dices}</li><li><span style='color:blue'>The total points of is ${sum} </span></li>`;
      target.innerHTML = result;
    }
  }
  else {
    const result = `<span style='color:blue'>You don't have any dice roll.</span>`;
    target.innerHTML = result;
  }


