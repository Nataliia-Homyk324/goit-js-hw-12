import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPictures } from "./js/pixabay-api.js";
import { createMarkup } from "./js/render-functions.js";


import iconRejected from './img/octagon.png'

const formSearch = document.querySelector('.form-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const endLoader = document.querySelector('.end-loader');
const btnLoad = document.querySelector('.btn-load');

let currentPage = 1;
const perPage = 15;

loader.style.display = 'none';
endLoader.style.display = 'none';
btnLoad.style.display = 'none';


formSearch.addEventListener('submit', onSearch);


function onSearch(event) {
    //сброс дефолтних налаштувань форми після події сабміт
  event.preventDefault();
  currentPage = 1;
   btnLoad.style.display = 'none';
 
    // поле введення запиту не може бути порожнім при натисканні на кнопку відправки форми
    if (event.target.elements.search.value.trim() === '') {
        iziToast.show({
        message: `The search query cannot be empty`,
        timeout: 5000,
        close: false,
        position: 'bottomLeft',
        backgroundColor: '#ef4040',
        messageSize: 16,
        messageColor: '#fff',
        title: 'Sorry,',
        titleSize: 16,
        titleColor: '#fff',
        iconUrl: iconRejected,
        });
        return; 
    }
    //відображаєм повідомлення про завантаження зображень
  
  

  const inputValue = event.target.elements.search.value.trim();
  


//  очищаємо галерею перед новим пошуком
  listImages.innerHTML = '';

  
  

    getPictures(inputValue)
      .then(({ data }) => {

        const totalPages = Math.ceil(data.totalHits / perPage);

            if (currentPage === totalPages) {
                btnLoad.style.display = 'none';
                endLoader.style.display = 'block';
            } else {
                btnLoad.style.display = 'block';
            }


      if (!data.hits.length) {
        iziToast.show({
        title: 'Sorry,',
        message: 'there are no images matching your search query. Please try again!',
        position: 'bottomLeft',
        backgroundColor: '#ef4040',
        messageSize: 16,
        messageColor: '#fff',
        titleSize: 16,
        titleColor: '#fff',
        iconUrl: iconRejected,
        });
        }
        
      


      listImages.insertAdjacentHTML('afterbegin', createMarkup(data.hits));
        
      const refreshPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      // refreshPage.refresh();

        formSearch.reset();
        
      btnLoad.style.display = 'block';
    
    })
    .catch((error) => {
      
      console.log(error);
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

    })
  
      .finally(() => {
        loader.style.display = 'none';
        
        
      });
}