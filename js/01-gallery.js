import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItems1 = document.querySelector('.gallery');

const gallerySelector = (images) => {
    return images
        .map(({ preview, original, description }) => {
            return `<div class = "gallery__item"><a class = "gallery__link" href = ${original}><img class = "gallery__image" src = "${preview}" data-source = ${original} alt = "${description}"></div>`;
        })
        .join('');
};

const imagesMarkup = gallerySelector(galleryItems);

galleryItems1.insertAdjacentHTML('afterbegin', imagesMarkup);
galleryItems1.addEventListener('click', gallerySelect1);

function gallerySelect1(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(
        `<img src = "${event.target.dataset.source}" width = "800" height = "600">`
    );
    instance.show();
    }
