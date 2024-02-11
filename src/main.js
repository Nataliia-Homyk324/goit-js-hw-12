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
const endLoader = document.querySelector(".end-loader");// напис що закінчилися зображення в колекції
const btnLoad = document.querySelector('.btn-load'); // кнопка завантажити ще
const loaderMore = document.querySelector('.loader-more');

let currentPage = 1;
const perPage = 40;
let inputSearch = '';
let simpleLightboxExem;

loader.style.display = 'none';
loaderMore.style.display = 'none';
btnLoader.style.display = 'none';
endLoader.style.display = 'none';

formSearch.addEventListener('submit', onSearch);
btnLoader.addEventListener('click', onLoadMore);


function onSearch(event) {
    //сброс дефолтних налаштувань форми після події сабміт
  event.preventDefault();
  
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

    currentPage = 1;
    //відображаєм повідомлення про завантаження зображень
    loader.style.display = 'block';
    btnLoader.style.display = 'none';
    endLoader.style.display = 'none';

  const inputSearch = event.target.elements.search.value.trim();
  


//  очищаємо галерею перед новим пошуком
    listImages.innerHTML = '';

    if (!inputSearch) {
        iziToast.warning({
            title: 'Caution',
            message: 'Sorry, but you did not fill out the field!',
        });
        loader.style.display = 'none';
        return;
    }

    getPictures(inputValue,currentPage)
        .then( ({ data }) => {
     
            const totalPages = Math.ceil(data.totalHits / perPage);
            if (currentPage === totalPages) {
                btnLoader.style.display = 'none';
                endLoader.style.display = 'block';
            } else {
                btnLoader.style.display = 'block';
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
          return;
        }
        


            listImages.insertAdjacentHTML('afterbegin', createMarkup(data.hits));
            
            iziToast.success({
                title: 'Wow',
                message: `We found ${data.totalHits} pictures!`,
            });
            
      simpleLightboxExem = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      simpleLightboxExem.refresh();

      formSearch.reset();
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
  
  .finally(() => loader.style.display = 'none');
  

}