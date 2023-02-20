import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');
const createGallery = createCardsImg(galleryItems);

galleryBox.insertAdjacentHTML('afterbegin', createGallery);

function createCardsImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<a class = "gallery__item" href = "${original}">
        <img class = "gallery__image" src = "${preview}" alt = "${description}"></a>`;
        })
        .join('');
}

const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
    close: false,
});
