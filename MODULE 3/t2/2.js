'use strict';
const li = document.createElement("li");
li.innerHTML = `
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
    `;
document.getElementById("target").appendChild(li);
//ad class into second list
document.querySelectorAll('li')[2].classList.add('my-item');