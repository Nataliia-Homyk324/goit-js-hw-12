
export { getPictures };

function getPictures(name) {
  const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '42245088-70138ac1b5442bea0784205eb';
    
  const searchParams = new URLSearchParams({
    key: KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  })

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    
};