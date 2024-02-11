import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



export { getPictures };
    
const perPage = 15;
    
async  function getPictures(name, page) {
//   const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '42245088-70138ac1b5442bea0784205eb';

try {
        
        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: KEY,
                q: name,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage,
            }
        })
        return response;
    }
    catch {
        iziToast.error({
            title: 'Error',
            message: 'Sorry! The site is currently unavailable. Please try later!',
        });
        console.error(error.message);
    }
}



    
//   const searchParams = new URLSearchParams({
//     key: KEY,
//     q: name,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 15,
//   })
    
//     const response = await axios.get(BASE_URL, searchParams);
// 	return response.data;

    // return fetch(`${BASE_URL}?${searchParams}`)
      
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error(response.statusText);
    //   }
    //   return response.json();
    // })
    
}

 