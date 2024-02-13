import{a as S,i as l,S as u}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function d(r,o){const s="https://pixabay.com/api/",a="42245088-70138ac1b5442bea0784205eb",e=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o});try{return await S(`${s}?${e}`)}catch(t){console.error(t),l.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:iconRejected})}}function y(r){return r.map(({webformatURL:o,largeImageURL:s,tags:a,likes:e,views:t,comments:i,downloads:A})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
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
              <p class="amount">${A}</p>
            </div>
          </div>
        </li>`).join("")}const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgBrZVRDoMgDIar0fi6m2xH2Y3Ek2w3cFfZXXwBljFQCai0xemfoCaU/xNpKwAirXWrlDY5w8ViPhVmbgwIO14A3zeQKq/2IuwaqOu6A07+zaVUT8iUi+V28rd5NuSIOQs5wxyFUOZKqRtnmIpZQCZz3acWcgcXUjkF0b2bmwFSpAxskMAgYecaWSsFC8AgnHkMqIBR09TCGrnHsZic5iLs3By3ngWsITMgy9yphEyVJZjUM6esHUS9yfea7N7DAmJz/1niM2EhVBZR2UKl8DS/SFO80OhUnCBkoYWgz2MdNAx8q0jFOK/Fy1GQvdqYe50BQc3PgLDmRyCU+aYOfFsoCtPa+yXvp2/ue9rHqLATflCf5QflVUcNIrzeSwAAAABJRU5ErkJggg==",p=document.querySelector(".form-search"),g=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".end-loader"),n=document.querySelector(".btn-load"),b="";let c=1;const C=15;h.style.display="none";m.style.display="none";n.style.display="none";p.addEventListener("submit",w);n.addEventListener("click",L);function w(r){if(r.preventDefault(),c=1,r.target.elements.search.value.trim()===""){l.show({message:"The search query cannot be empty",timeout:5e3,close:!1,position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",title:"Sorry,",titleSize:16,titleColor:"#fff",iconUrl:f});return}const o=r.target.elements.search.value.trim();g.innerHTML="",m.style.display="none",d(o,c).then(({data:s})=>{console.log(s.totalHits);const a=Math.ceil(s.totalHits/C);c===a?(n.style.display="none",m.style.display="block"):n.style.display="block",s.hits.length||(l.show({title:"Sorry,",message:"there are no images matching your search query. Please try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f}),n.style.display="none"),g.insertAdjacentHTML("afterbegin",y(s.hits)),new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),p.reset()}).catch(s=>{console.log(s),l.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})}).finally(()=>{h.style.display="none"})}function L(r){c+=1,d(b,c).then(({data:o})=>{g.insertAdjacentHTML("beforeend",y(o.hits)),new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{console.log(o),l.show({title:"Sorry,",message:"try again!",position:"bottomLeft",backgroundColor:"#ef4040",messageSize:16,messageColor:"#fff",titleSize:16,titleColor:"#fff",iconUrl:f})})}
//# sourceMappingURL=commonHelpers.js.map
