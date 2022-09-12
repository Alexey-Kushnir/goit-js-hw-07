import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imgMarkup = createGallaryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

function createGallaryItem(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
  <div class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
  </div>
  `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
  	<img src="${e.target.dataset.source}">
  `);

  instance.show();
  e.preventDefault();
}
