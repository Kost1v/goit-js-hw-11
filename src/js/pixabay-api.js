const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    key: '45540083-4d95202277f3d237cb6fcfd23',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
  });

  return fetch(`${BASE_URL}?${urlParams}`).then(response => {
    
    if (!response.ok) {
      throw new Error(response.status);
    }
    
    return response.json();
  })
};
