export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const products = await response.json();
  return products;
}

export async function getProductsFromId(id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const products = await response.json();
  return products;
}

export const getProducts = () => JSON.parse(localStorage.getItem('bycart')) || [];

export function addProduct(newProduct) {
  if (!localStorage.bycart) {
    localStorage.setItem('bycart', JSON.stringify([]));
  }
  localStorage.setItem('bycart', JSON.stringify([...getProducts(), newProduct]));
}

export function productsByQuanty() {
  return getProducts().reduce((acc, prod, _, array) => {
    if (acc.some(({ id }) => id === prod.id)) return acc;

    const products = array.filter(({ id }) => id === prod.id);

    const prodQuantity = products[0];
    prodQuantity.quantity = products.length;

    acc.push(prodQuantity);

    return acc;
  }, []);
}
