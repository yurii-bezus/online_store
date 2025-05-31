import"./assets/styles-BK7AYJoX.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";o.defaults.baseURL="https://dummyjson.com";async function r(){const t=await o.get("/products/category-list");return console.log(t),t.data}async function c(){return(await o.get("https://dummyjson.com/products?limit=12&skip=0")).data.products}const a={allCategories:document.querySelector(".categories"),allProducts:document.querySelector(".products")};function n(t){a.allCategories.innerHTML="";const e=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>`).join("");a.allCategories.innerHTML=e}function i(t){a.allProducts.innerHTML="";const e=t.map(s=>`<li class="products__item" data-id="${t.id}">
    <img class="products__image" src="${s.images[0]}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${s.brand}</span></p>
    <p class="products__category">Category:${s.category} </p>
    <p class="products__price">Price:${s.price} $</p>
 </li>
`).join("");a.allProducts.innerHTML=e}async function l(){const t=await r();n(t)}l();async function u(){const t=await c();i(t)}u();a.allCategories.addEventListener("click",t=>{const e=t.target.closest(".categories__btn");console.log(e.textContent)});
//# sourceMappingURL=index.js.map
