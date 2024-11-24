'use strict';

const form = document.querySelector('#show-search');
const showInput = document.querySelector('#query');

// function of finding shows
async function getShow(showName) {
  const request = `https://api.tvmaze.com/search/shows?q=${showName}`;
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error('Server not found');
  }
  return await response.json();
}

// When the form is submitted...
form.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  const showName = showInput.value;
  try {
    const TVShow = await getShow(showName);
    console.log(TVShow);
  } catch (error) {
        console.log(error.message);
    }
});

