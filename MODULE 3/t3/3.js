'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.querySelector('#target');
for (let i of names) {
  const li = document.createElement('li');
  li.innerText = i;
  target.appendChild(li);
}
