'use strict';

const form = document.querySelector('#show-search');
const showInput = document.querySelector('#query');
const result = document.querySelector('#result');
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
    // empty the result section
    result.innerHTML = '';
    TVShow.forEach(show => {
      // heading (showName)
      const h2 = document.createElement('h2');
      h2.innerText = `${show.show.name}`;

      // url
      const a = document.createElement('a');
      a.href = show.show.url;
      a.innerText = 'More information';
      a.target = '_blank';// can not back the first page

      // medium image
      const image = document.createElement('img');
      image.src = show.show.image?.medium;
      image.alt = show.show.name;

      // handling no image
      if (!show.show.image?.medium) {
        image.src = 'https://via.placeholder.com/210x295?text=Not%20Found';
     }

      // create article element for all info
      const article = document.createElement('article');

      // Summary
      const p = document.createElement('p');
      p.innerHTML = show.show.summary;

      // collect info to article
      article.append(h2, a, image, p);

      // add to page
      result.appendChild(article); // commented because info is now in popup
    })
  }
    catch (error) {
        console.log(error.message);
    }
});
