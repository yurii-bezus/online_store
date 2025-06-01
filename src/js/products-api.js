// Функції для роботи з бекендом
import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';

export async function fetchCategories() {
  const response = await axios.get('/products/category-list');
  console.log(response);
  return response.data;
}

export async function fetchProducts() {
  const currentPage = 1;
  const url = `https://dummyjson.com/products?limit=12&skip=${
    (currentPage - 1) * 12
  }`;

  const response = await axios.get(url);
  return response.data.products;
}

export async function getProductsByCategory(category) {
  const response = await axios.get(`products/category/${category}`);
  console.log(response);

  return response.data.products;
}
