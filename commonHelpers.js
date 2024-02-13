import{a as w,i as n,S as h}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();async function A(s,o){const l="https://pixabay.com/api/",r="42245088-70138ac1b5442bea0784205eb",e=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o});try{return await w(`${l}?${e}`)}catch(t){console.error(t),n.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected})}}function b(s){return s.map(({webformatURL:o,largeImageURL:l,tags:r,likes:e,views:t,comments:i,downloads:C})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${r}"
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
              <p class="amount">${C}</p>
            </div>
          </div>
        </li>`).join("")}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",S=document.querySelector(".form-search"),g=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=document.querySelector(".loader-more"),m=document.querySelector(".end-loader"),c=document.querySelector(".btn-load");let u="",a=1;const L=15;let p=0;d.style.display="none";m.style.display="none";c.style.display="none";y.style.display="none";S.addEventListener("submit",U);c.addEventListener("click",k);function U(s){if(s.preventDefault(),a=1,s.target.elements.search.value.trim()===""){n.show({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Sorry,",titleSize:16,titleColor:"#fff",iconUrl:f});return}u=s.target.elements.search.value.trim(),g.innerHTML="",d.style.display="block",m.style.display="none",A(u,a).then(({data:o})=>{console.log(o.totalHits),p=Math.ceil(o.totalHits/L),a===p?(c.style.display="none",m.style.display="block"):c.style.display="block",o.hits.length||(n.show({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f}),c.style.display="none"),g.insertAdjacentHTML("afterbegin",b(o.hits)),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),S.reset()}).catch(o=>{console.log(o),n.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}).finally(()=>{d.style.display="none"})}function k(s){a+=1,y.style.display="block";let r=document.querySelector(".gallery-item").getBoundingClientRect().height;console.log(r),A(u,a).then(({data:e})=>{console.log(p),console.log(a),g.insertAdjacentHTML("beforeend",b(e.hits)),window.scrollBy({top:r*2,behavior:"smooth"}),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(e=>{console.log(e),n.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}).finally(()=>{y.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
