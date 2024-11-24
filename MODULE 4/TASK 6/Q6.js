'use strict';

const form = document.querySelector('#show-search');
const showInput = document.querySelector('#query');
const result = document.querySelector('#result');
// function of finding shows
async function getShow(showName) {
  const request = `https://api.chucknorris.io/jokes/search?query=${showName}`;
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
    // empty the result section
    result.innerHTML = '';
    TVShow.result.forEach(show => {
      const p = document.createElement('p');
      p.innerHTML = show.value;
      // create article element for all info
      const article = document.createElement('article');
      article.append(p);

      // add to page
      result.appendChild(article); // commented because info is now in popup
    })
  }
    catch (error) {
        console.log(error.message);
    }
});
