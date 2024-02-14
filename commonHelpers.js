import{a as w,i as c,S as h}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function A(s,e){const r="https://pixabay.com/api/",l="42245088-70138ac1b5442bea0784205eb",t=new URLSearchParams({key:l,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e});try{return await w(`${r}?${t}`)}catch(o){console.error(o),c.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected})}}function b(s){return s.map(({webformatURL:e,largeImageURL:r,tags:l,likes:t,views:o,comments:n,downloads:C})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${l}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="title">Likes</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="title">Views</h2>
              <p class="amount">${o}</p>
            </div>
            <div class="block">
              <h2 class="title">Comments</h2>
              <p class="amount">${n}</p>
            </div>
            <div class="block">
              <h2 class="title">Downloads</h2>
              <p class="amount">${C}</p>
            </div>
          </div>
        </li>`).join("")}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",S=document.querySelector(".form-search"),y=document.querySelector(".gallery"),d=document.querySelector(".loader"),m=document.querySelector(".loader-more"),g=document.querySelector(".end-loader"),a=document.querySelector(".btn-load");let u="",i=1;const L=15;let p=0;d.style.display="none";g.style.display="none";a.style.display="none";m.style.display="none";S.addEventListener("submit",U);a.addEventListener("click",k);function U(s){if(s.preventDefault(),i=1,s.target.elements.search.value.trim()===""){c.show({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Sorry,",titleSize:16,titleColor:"#fff",iconUrl:f});return}u=s.target.elements.search.value.trim(),y.innerHTML="",d.style.display="block",g.style.display="none",A(u,i).then(({data:e})=>{console.log(e.totalHits),p=Math.ceil(e.totalHits/L),i===p?(a.style.display="none",g.style.display="block"):a.style.display="block",e.hits.length||(c.show({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f}),a.style.display="none"),y.insertAdjacentHTML("afterbegin",b(e.hits)),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),S.reset()}).catch(e=>{console.log(e),c.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}).finally(()=>{d.style.display="none"})}function k(s){i+=1,m.style.display="block",A(u,i).then(({data:e})=>{y.insertAdjacentHTML("beforeend",b(e.hits)),v(),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),i===p&&(a.style.display="none",g.style.display="block")}).catch(e=>{console.log(e),c.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}).finally(()=>{m.style.display="none"})}function v(){let e=document.querySelector(".gallery-item").getBoundingClientRect().height;console.log(e),window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
