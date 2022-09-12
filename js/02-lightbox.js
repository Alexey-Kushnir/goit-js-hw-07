import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imgMarkup = createGallaryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createGallaryItem(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// const galleryContainer = document.querySelector(".gallery");
// const imgMarkup = createGallaryItem(galleryItems);

// galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

// galleryContainer.addEventListener("click", onGalleryContainerClick);

// function createGallaryItem(galleryItems) {
//   return galleryItems
//     .map(({ description, original, preview }) => {
//       return `
//       <a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>
//   `;
//     })
//     .join("");
// }

// function onGalleryContainerClick(e) {
//   e.preventDefault();

//   var lightbox = new SimpleLightbox(".gallery a", {
//     captions: true,
//     captionSelector: "img",
//     captionType: "attr",
//     captionsData: "alt",
//     captionPositio: "bottom",
//     captionDelay: 250,
//   });
// }
