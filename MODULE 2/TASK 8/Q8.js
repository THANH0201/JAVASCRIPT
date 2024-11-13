'use strict';
const target = document.querySelector('#target');

function concat(array) {
    const result = `<span style="color:blue">${array[0]}${array[1]}${array[2]}${array[3]}</span>`;
    target.innerHTML = result;
}
const array = ["Johnny", "DeeDee", "Joey", "Marky"];
concat(array)



