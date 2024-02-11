import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



export { getPictures };
    
    
  async function getPictures(name) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '42245088-70138ac1b5442bea0784205eb';

  const searchParams = new URLSearchParams({
    key: KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  });

  try {
    const response = await axios (`${BASE_URL}?${searchParams}`);
    return response;
  } catch (error) {
      console.error(error);
      iziToast.show({
        title: 'Sorry,',
        message: 'try again!',
        position: 'bottomLeft',
        backgroundColor: '#ef4040',
        messageSize: 16,
        messageColor: '#fff',
        titleSize: 16,
        titleColor: '#fff',
        iconUrl: iconRejected,
        });
  }
}


 