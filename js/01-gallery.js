import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imgMarkup = createGallaryItem(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

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

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: (instance) => {
        addEventListener("keydown", onEscPress);
      },
      onClose: (instance) => {
        removeEventListener("keydown", onEscPress);
      },
    }
  );

  function onEscPress(e) {
    if (e.key !== "Escape") {
      return;
    }
    instance.close();
  }

  instance.show();
}
