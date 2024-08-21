export const createGalleryCard = imgInfo => {
  return `
  <li class="gallery-card">
    <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
  </li>
  `;
};
