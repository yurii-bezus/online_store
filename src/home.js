//Логіка сторінки Home
import {
  fetchCategories,
  fetchProducts,
  getProductsByCategory,
} from './js/products-api';
import { refs } from './js/refs';
import { markupCategories, markupProducts } from './js/render-function';

async function renderCategories() {
  const categories = await fetchCategories();
  const allCategories = ['All', ...categories];
  markupCategories(allCategories);
}
renderCategories();

async function renderProducts() {
  const products = await fetchProducts();
  markupProducts(products);
}
renderProducts();

// refs.allCategories.addEventListener('click', async event => {
//   const clickBtn = event.target.closest('.categories__btn');
//   const catName = clickBtn.textContent.trim();
//   if (!clickBtn) {
// return;}

//   if (catName === 'All') {
//     const response = await fetchProducts();
//     markupProducts(response);
//   } else {
//     getProductsByCategory(catName);
//   }
//   const products = await getProductsByCategory(clickBtn.textContent);
//   markupProducts(products);
// });
refs.allCategories.addEventListener('click', async event => {
  const clickBtn = event.target.closest('.categories__btn');
  if (!clickBtn) return;

  const catName = clickBtn.textContent.trim();

  try {
    let products = [];

    if (catName === 'All') {
      products = await fetchProducts();
    } else {
      products = await getProductsByCategory(catName);
    }

    markupProducts(products);
  } catch (error) {
    console.error('Error loading products:', error);
  }
});
