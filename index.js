import"./assets/styles-BK7AYJoX.js";import{a}from"./assets/vendor-N5iQpiFS.js";a.defaults.baseURL="https://dummyjson.com";async function i(){const t=await a.get("/products/category-list");return console.log(t),t.data}async function n(){return(await a.get("https://dummyjson.com/products?limit=12&skip=0")).data.products}async function l(t){const e=await a.get(`products/category/${t}`);return console.log(e),e.data.products}const o={allCategories:document.querySelector(".categories"),allProducts:document.querySelector(".products"),notFound:document.querySelector(".not-found")};function u(t){o.allCategories.innerHTML="";const e=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>`).join("");o.allCategories.innerHTML=e}function c(t){if(t.length===0){o.notFound.classList.add("not-found--visible");return}o.notFound.classList.remove("not-found--visible"),o.allProducts.innerHTML="";const e=t.map(s=>`<li class="products__item" data-id="${t.id}">
    <img class="products__image" src="${s.images[0]}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${s.brand}</span></p>
    <p class="products__category">Category:${s.category} </p>
    <p class="products__price">Price:${s.price} $</p>
 </li>
`).join("");o.allProducts.innerHTML=e}async function d(){const e=["All",...await i()];u(e)}d();async function p(){const t=await n();c(t)}p();o.allCategories.addEventListener("click",async t=>{const e=t.target.closest(".categories__btn");if(!e)return;const s=e.textContent.trim();try{let r=[];s==="All"?r=await n():r=await l(s),c(r)}catch(r){console.error("Error loading products:",r)}});
//# sourceMappingURL=index.js.map
