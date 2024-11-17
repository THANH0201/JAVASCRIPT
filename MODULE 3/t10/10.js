'use strict';

const form = document.querySelector('#source');
const firstName = document.querySelector('input[name=firstname]');
const lastName = document.querySelector('input[name=lastname]');
const p = document.querySelector('#target');
// When the form is submitted...
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
    // Here you can check, for example, whether the fields on the form have been filled in correctly,
    // after which it could be sent using the fetch method, for example
    // However, for now, let's print the user input as an example.
  p.innerHTML = `Your name is ${firstName.value} ${lastName.value}`;
});