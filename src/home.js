//Логіка сторінки Home
import { fetchCategories, fetchProducts } from './js/products-api';
import { refs } from './js/refs';
import { markupCategories, markupProducts } from './js/render-function';

async function renderCategories() {
  const categories = await fetchCategories();
  markupCategories(categories);
}
renderCategories();

async function renderProducts() {
  const products = await fetchProducts();
  markupProducts(products);
}
renderProducts();

refs.allCategories.addEventListener('click', event => {
  const clickBtn = event.target.closest('.categories__btn');
  console.log(clickBtn.textContent);
  if (!clickBtn) {
    return;
  }
});
