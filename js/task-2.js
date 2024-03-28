const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

// ________________Варіант 1 (кількість картинок в рядку підлаштовуються під розміри вікна)________________

const container = document.querySelector('.gallery');

function createGallery(picturesArr) {
  return picturesArr
    .map(
      ({ url, alt }) =>
        `
    <li class="card">
    <div class="image-box" width = '360' height = '300'>
      <img src="${url}" alt="${alt}" class="picture" width = '360' height = '300'>
      </div>
    </li>
  `
    )
    .join('');
}

container.insertAdjacentHTML('beforeend', createGallery(images));

// ________________Варіант 2 (незмінно 3 картинки в рядку)________________

// const container = document.querySelector('.gallery');

// function createGallery(picturesArr) {
//   const galleryHTML = picturesArr
//     .map(
//       ({ url, alt }) =>
//         `
//         <img src="${url}" alt="${alt}" class="picture" width = '360' height = '300'>
//         `
//     )
//     .join('');

//   const firstPic = galleryHTML.slice(0, galleryHTML.length / 2);
//   const lastPic = galleryHTML.slice(firstPic.length);

//   const galleryDivided = `
//     <div class="gallery-section">
//       ${firstPic}
//     </div>
//     <div class="gallery-section">
//       ${lastPic}
//     </div>
//   `;

//   return galleryDivided;
// }

// container.innerHTML = createGallery(images);
