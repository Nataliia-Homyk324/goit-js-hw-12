import{a as p,i as n,S as A}from"./assets/vendor-5401a4b0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function h(r){const s="https://pixabay.com/api/",o="42245088-70138ac1b5442bea0784205eb",a=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});try{return await p(`${s}?${a}`)}catch(e){console.error(e),n.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected})}}function b(r){return r.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:t,comments:i,downloads:y})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${a}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="title">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="title">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="title">Comments</h2>
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="title">Downloads</h2>
              <p class="amount">${y}</p>
            </div>
          </div>
        </li>`).join("")}const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",u=document.querySelector(".form-search"),f=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=document.querySelector(".end-loader"),l=document.querySelector(".btn-load");let m=1;const S=15;d.style.display="none";g.style.display="none";l.style.display="none";u.addEventListener("submit",C);function C(r){if(r.preventDefault(),m=1,l.style.display="none",r.target.elements.search.value.trim()===""){n.show({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Sorry,",titleSize:16,titleColor:"#fff",iconUrl:c});return}const s=r.target.elements.search.value.trim();f.innerHTML="",h(s).then(({data:o})=>{const a=Math.ceil(o.totalHits/S);m===a?(l.style.display="none",g.style.display="block"):l.style.display="block",o.hits.length||n.show({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:c}),f.insertAdjacentHTML("afterbegin",b(o.hits)),new A(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),u.reset(),l.style.display="block"}).catch(o=>{console.log(o),n.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:c})}).finally(()=>{d.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
