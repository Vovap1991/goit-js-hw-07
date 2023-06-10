import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  })
  .join("");

galleryContainerEl.insertAdjacentHTML("beforeend", markup);

galleryContainerEl.addEventListener("click", onClickHandler);

function onClickHandler(event) {
  event.preventDefault();
  if (!event.target.alt === "IMG") return;

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", onEscapePress);

  function onEscapePress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
};

console.log(galleryItems);
