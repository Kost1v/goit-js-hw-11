import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u="https://pixabay.com/api",f=o=>{const s=new URLSearchParams({key:"45540083-4d95202277f3d237cb6fcfd23",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},m=o=>`
  <li class="gallery-card">
    <img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}" />
  </li>
  `,i=document.querySelector(".form"),a=document.querySelector(".gallery");function d(o){if(o.preventDefault(),i.firstElementChild.value.trim()==""){l.warning({title:"",message:"Введи запит на пошук",messageSize:"18",position:"topRight"});return}const s=i.elements.search_query.value;f(s).then(t=>{if(console.log(t),t.hits.length===0){l.error({title:"",message:"Введи запит на пошук",messageSize:"18",position:"topRight"}),a.innerHTML="",i.reset();return}const n=t.hits.map(e=>m(e)).join("");a.innerHTML=n}).catch(t=>console.log(t)),i.reset()}i.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
