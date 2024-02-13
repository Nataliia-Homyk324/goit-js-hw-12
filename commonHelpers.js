import{a as w,i as n,S as h}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function A(s,t){const r="https://pixabay.com/api/",a="42245088-70138ac1b5442bea0784205eb",e=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t});try{return await w(`${r}?${e}`)}catch(o){console.error(o),n.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected})}}function b(s){return s.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:o,comments:i,downloads:C})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${t}"
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
              <p class="amount">${o}</p>
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
        </li>`).join("")}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",S=document.querySelector(".form-search"),g=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=document.querySelector(".loader-more"),m=document.querySelector(".end-loader"),c=document.querySelector(".btn-load");let u="",l=1;const L=15;let p=0;d.style.display="none";m.style.display="none";c.style.display="none";y.style.display="none";S.addEventListener("submit",U);c.addEventListener("click",k);function U(s){if(s.preventDefault(),l=1,s.target.elements.search.value.trim()===""){n.show({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Sorry,",titleSize:16,titleColor:"#fff",iconUrl:f});return}u=s.target.elements.search.value.trim(),g.innerHTML="",d.style.display="block",m.style.display="none",A(u,l).then(({data:t})=>{console.log(t.totalHits),p=Math.ceil(t.totalHits/L),l===p?(c.style.display="none",m.style.display="block"):c.style.display="block",t.hits.length||(n.show({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f}),c.style.display="none"),g.insertAdjacentHTML("afterbegin",b(t.hits)),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),S.reset()}).catch(t=>{console.log(t),n.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}).finally(()=>{d.style.display="none"})}function k(s){l+=1,y.style.display="block",A(u,l).then(({data:t})=>{console.log(p),console.log(l),g.insertAdjacentHTML("beforeend",b(t.hits)),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{console.log(t),n.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}).finally(()=>{y.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
