import{i as n,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",h=r=>{const o=new URLSearchParams({key:"45540083-4d95202277f3d237cb6fcfd23",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12});return fetch(`${f}?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},m=r=>`
  <li class="gallery-card">
    <a class="gallery-link" href="${r.largeImageURL}">
      <img
        class="gallery-img"
        src="${r.webformatURL}"
        alt="${r.tags}"
      />
    </a>
    <div>
      <ul class="img-info">
        <li class="box-info">
          <h4>Likes</h4>
          <p>${r.likes}</p>
        </li>
        <li class="box-info">
          <h4>Views</h4>
          <p>${r.views}</p>
        </li>
        <li class="box-info">
          <h4>Comments</h4>
          <p>${r.comments}</p>
        </li>
        <li class="box-info">
          <h4>Downloads</h4>
          <p>${r.downloads}</p>
        </li>
      </ul>
    </div>
  </li>
  `,i=document.querySelector(".form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");function p(r){if(r.preventDefault(),i.firstElementChild.value.trim()==""){n.warning({title:"",message:"Введи запит на пошук",messageSize:"18",position:"topRight"});return}const o=i.elements.search_query.value;u.classList.add("is-load"),h(o).then(s=>{if(s.hits.length===0){n.error({title:"",message:"Введи запит на пошук",messageSize:"18",position:"topRight"}),c.innerHTML="",i.reset();return}const l=s.hits.map(t=>m(t)).join("");c.innerHTML=l,u.classList.remove("is-load"),new d(".gallery-link",{captionsData:"alt",captionDelay:250}).on("show.simplelightbox")}).catch(s=>console.log(s)),i.reset()}i.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
