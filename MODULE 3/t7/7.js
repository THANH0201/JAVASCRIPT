'use strict'

const paragraph = document.querySelector('#trigger');
const image = document.querySelector('#target');

paragraph.addEventListener('mouseover', function(){
  image.src = 'img/picB.jpg';
});

paragraph.addEventListener('click', function(){
  image.src = 'img/picA.png';
})
paragraph.addEventListener('mouseout', function(){
  image.src = 'img/picA.jpg';
});