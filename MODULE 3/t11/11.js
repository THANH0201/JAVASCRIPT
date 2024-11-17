'use strict';
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'The happiness',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'The purity',
    caption: 'Caption 2',
    description:
      'The purity ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'The purity ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'The mystery ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Together',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Where are you?',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'The peace',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      ' The freedom ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'The soul',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

// add your code here
const target = document.querySelector('#pictures');

picArray.forEach((picture) => {
  const article = document.createElement('article');
  article.classList.add('card');

//heading
  const h2 = document.createElement('h2');
  h2.textContent = picture.title;
  article.appendChild(h2);

//figure
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = picture.image.medium;
  img.alt = picture.caption;
  figure.appendChild(img);
  const figcaption = document.createElement('figcaption');
  figcaption.innerText = picture.caption;
  figure.appendChild(figcaption);
  article.appendChild(figure);

//text
  const p = document.createElement('p');
  p.innerText = picture.description;
  article.appendChild(p);

//dialog
  article.addEventListener('click', () => {
    const modalOpen = document.querySelector("dialog");
    const modalClose = modalOpen.querySelector('span')
    const img = modalOpen.querySelector('img');
      img.src = picture.image.large;
      img.alt = picture.title;
      modalOpen.showModal();
  })
  article.addEventListener('click', () => {
    const modalOpen = document.querySelector("dialog");
    const modalClose = modalOpen.querySelector('span')
    modalClose.addEventListener('click', () => {
      modalOpen.close();
    })
  })
//ad article into section
  target.appendChild(article);
})



