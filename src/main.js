import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api';
import { createGalleryCard } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function searchPhoto(event) {
  event.preventDefault();

  if (form.firstElementChild.value.trim() == '') {
    iziToast.warning({
      title: '',
      message: `Введи запит на пошук`,
      messageSize: '18',
      position: 'topRight',
    });
    return;
  }

  const searchQuery = form.elements.search_query.value;
  loader.classList.add('is-load');

  fetchPhotos(searchQuery)
    .then(data => {

      if (data.hits.length === 0) {
        iziToast.error({
          title: '',
          message: `Введи запит на пошук`,
          messageSize: '18',
          position: 'topRight',
        });

        gallery.innerHTML = '';
        form.reset();

        return;
      }

      const galleryCards = data.hits
        .map(cardInfo => createGalleryCard(cardInfo))
        .join('');

      gallery.innerHTML = galleryCards;

      loader.classList.remove('is-load');  

      let largeImage = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionDelay: 250,
      });

      largeImage.on('show.simplelightbox');
    })
    .catch(error => console.log(error));

  form.reset();
  return;
}

form.addEventListener('submit', searchPhoto);
