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
const loaderMore = document.querySelector('.loader-more');
const endLoader = document.querySelector('.end-loader');
const btnLoad = document.querySelector('.btn-load');


let inputValue = '';
let currentPage = 1;
const perPage = 15;
let totalPages = 0;

loader.style.display = 'none';
endLoader.style.display = 'none';
btnLoad.style.display = 'none';
loaderMore.style.display = 'none';


formSearch.addEventListener('submit', onSearch);
btnLoad.addEventListener('click', onLoadMore);


// обробник події натискання на кнопку пошук
function onSearch(event) {
    //сброс дефолтних налаштувань форми після події сабміт
  event.preventDefault();
  currentPage = 1;

  
   
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
    
  
   inputValue = event.target.elements.search.value.trim();
  


//  очищаємо галерею перед новим пошуком
  listImages.innerHTML = '';
  loader.style.display = 'block';
// очищаєм напис про закінчення знайдених єлементів перед новим запитом
  endLoader.style.display = 'none';

// робим запит на отримання зображень
    getPictures(inputValue, currentPage)
      .then(({ data }) => {
        console.log(data.totalHits);
        // обчислюєм кількість сторінок завантаження
        totalPages = Math.ceil(data.totalHits / perPage);
        
            // перевіряєм чи це остання завантажена сторінка
            if (currentPage === totalPages) {
              btnLoad.style.display = 'none';
              endLoader.style.display = 'block';
              
            } else {
              btnLoad.style.display = 'block';
              
            }

         // перевіряєм чи є завантажені елементи
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
          
           btnLoad.style.display = 'none';
          
        }
        

      listImages.insertAdjacentHTML('afterbegin', createMarkup(data.hits));
        
      const refreshPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      refreshPage.refresh();

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
  
      .finally(() => {
        loader.style.display = 'none';
        
        
      }); 
  
}



function onLoadMore(event) {
  currentPage += 1;
  // console.log(currentPage);
   
  loaderMore.style.display = 'block';


  getPictures(inputValue, currentPage)
    .then(({ data }) => {
      
      listImages.insertAdjacentHTML('beforeend', createMarkup(data.hits));

  
      smoothScrollToNextGroup();
        
      const refreshPage = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      refreshPage.refresh();

      if (currentPage === totalPages) {
              btnLoad.style.display = 'none';
              endLoader.style.display = 'block';
              } 

     }

  )
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

    }
    
  )
  .finally(() => {
        loaderMore.style.display = 'none';
          
      }); 
}  

function smoothScrollToNextGroup() {
  
//Отримуємо елемент галереї
  const galleryCard = document.querySelector('.gallery-item');
  //Щоб отримати висоту однієї карточки галереї використовуючи функцію getBoundingClientRect()
  // функція повертає обє'єкт, з якого отримуємо значення висоти карточки
let cardHeight = galleryCard.getBoundingClientRect().height;
console.log(cardHeight);
  // плавний скролл методом scrollBy на об'єкті window
window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth",
            });
}


