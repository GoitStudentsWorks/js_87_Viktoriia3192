function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},o.parcelRequired7c6=i),i.register("kyEFX",function(t,o){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var n,r,i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("kyEFX").register(JSON.parse('{"eUPFY":"shopping_list_olexandr.7c896e1b.js","8XY7q":"amazon.a0223db0.png","3WxNb":"apple-books.5a9f17e3.png","lJIFT":"bookshop.801e98bc.png","lp5u4":"sprite.34e09d89.svg","1XZ4K":"index.0b994302.js","eWzHU":"index.657b5491.js"}')),i("7Y9D8");var s={};s=new URL(i("kyEFX").resolve("8XY7q"),import.meta.url).toString();var a={};a=new URL(i("kyEFX").resolve("3WxNb"),import.meta.url).toString();var l={};l=new URL(i("kyEFX").resolve("lJIFT"),import.meta.url).toString(),i("5Szup"),i("fewGv"),i("dGLOO");// import Pagination from 'tui-pagination';
// // Отримати дані з localStorage
// const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
// // Задати розмір порції на сторінці
// const itemsPerPage = 3;
// // Розподілити дані на порції
// const paginatedData = [];
// for (let i = 0; i < shoppingList.length; i += itemsPerPage) {
//   const page = shoppingList.slice(i, i + itemsPerPage);
//   paginatedData.push(page);
// }
// function displayPage(pageNumber) {
//     // Отримати поточну порцію з paginatedData
//     const currentPage = paginatedData[pageNumber - 1];
//     // Очистити старий вміст сторінки
//     const shoppingListContainer = document.getElementById('shoppingListContainer');
//     shoppingListContainer.innerHTML = '';
//     // Відобразити елементи поточної порції
//     currentPage.forEach((item) => {
//       const listItem = document.createElement('li');
//       listItem.textContent = item.name; // Припускаючи, що у вас є поле "name" в об'єкті покупки
//       shoppingListContainer.appendChild(listItem);
//     });
//   }
//   function onPageChange(pageNumber) {
//     displayPage(pageNumber);
//   }
//   // Приклад створення кнопок для переходу між сторінками
//   const totalPages = paginatedData.length;
//   for (let i = 1; i <= totalPages; i++) {
//     const pageButton = document.createElement('button');
//     pageButton.textContent = i;
//     pageButton.addEventListener('click', () => onPageChange(i));
//     document.getElementById('paginationButtons').appendChild(pageButton);
//   }
// // 
var c={};c=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();const d=document.querySelector(".shop-list-container"),p=document.querySelector(".shop-list-empty"),u="bookArr";function f(e){let t=JSON.parse(localStorage.getItem(u));if(0===t.length){d.innerHTML="",p.classList.remove("shoping-hidden");return}p.classList.add("shoping-hidden"),d.insertAdjacentHTML("beforeend",g(t)),document.querySelector(".shop-button-book-remove"),d.innerHTML=g(t)}function g(e){return e.map(({author:e,title:o,description:n,book_image:r,buy_links:i,list_name:d,id:p})=>{let u=`<li class="shop-list-item" data-id="${p}">
                <img class="shop-list-img" src="${r||"../images/default_image.jpg"}" alt="${o}"> 
                <div class="shop-list-info">
                <h3 class="shop-book-title">${o}</h3>
                <p class="shop-category">${d}</p>
                <p class="shop-description">${n}</p>
                <div class="shop-autor-links">
                <p class="shop-book-author">${e}</p>
                <ul class="shop-links-img">
        <li class="shop-link shop-link-amazon">
        <a class="item-link" href=${h(i,"Amazon")} target= _blank><img src="${/*@__PURE__*/t(s)}" alt="Amazon" width="48px" height="15px"class="card-image card-imge-amazon"></a>
        </li>
        <li>
        <a class="item-link" href=${h(i,"Apple Books")} target= _blank><img src="${/*@__PURE__*/t(a)}" alt="Apple-Books" width="30px"class="card-image"></a>
        </li>
        <li>
        <a class="item-link" href=${h(i,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/t(l)}" alt="Book-Shop" width="30px"class="card-image"></a>
        </li>
      </ul>
      </div>
                </div>
      <button class="shop-button-book-remove" type="button">
      <svg class="shop-remove-btn" width="20" height="20">
                    <use href="${/*@__PURE__*/t(c)}#icon-shop-trash"></use>
                </svg>
      </button>
        </li>`;return u}).join("")}function h(e,t){for(let{name:o,url:n}of e)if(o===t)return n}window.addEventListener("DOMContentLoaded",f),d.addEventListener("click",function(e){if("shop-button-book-remove"!==e.target.className)return;let t=e.target.parentNode.dataset.id;(function(e){let t=JSON.parse(localStorage.getItem(u));t.find(t=>t.id===e);let o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(u,JSON.stringify(t))}//# sourceMappingURL=shopping_list_olexandr.7c896e1b.js.map
)(t),f()});
//# sourceMappingURL=shopping_list_olexandr.7c896e1b.js.map
