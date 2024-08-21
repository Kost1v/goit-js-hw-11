import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotos } from './js/pixabay-api';
import { createGalleryCard } from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

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

  fetchPhotos(searchQuery)
    .then(data => {
      console.log(data);

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
    })
    .catch(error => console.log(error));

  form.reset();
  return;
}

form.addEventListener('submit', searchPhoto);
