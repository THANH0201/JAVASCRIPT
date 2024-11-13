'use strict';
const target = document.querySelector('#target');

function even(array) {
    const even_number = array.filter(num => num % 2 === 0);
    const result = `<li><span style="color:blue">The original array:</span> ${array}</li><li><span style="color:blue">The even array:</span> ${even_number}</li>`;
    target.innerHTML = result;
}

const array = [2,7,4];
even(array)



