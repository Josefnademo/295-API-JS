let products = [
  {
    id: 1,
    name: "Big Mac",
    price: 5.99,
    created: new Date(),
  },
  {
    id: 2,
    name: "Mc Chicken",
    price: 4.99,
    created: new Date(),
  },
  {
    id: 3,
    name: "Double Cheese Burger",
    price: 2.99,
    created: new Date(),
  },
  {
    id: 4,
    name: "Fries",
    price: 2.99,
    created: new Date(),
  },
  {
    id: 5,
    name: "Mc Nuggets",
    price: 3.49,
    created: new Date(),
  },
  {
    id: 6,
    name: "Salad",
    price: 2.79,
    created: new Date(),
  },
  {
    id: 7,
    name: "Coke",
    price: 1.99,
    created: new Date(),
  },
  {
    id: 8,
    name: "Ice Tea",
    price: 1.99,
    created: new Date(),
  },
  {
    id: 9,
    name: "Water",
    price: 1.49,
    created: new Date(),
  },
  {
    id: 10,
    name: "Big Tasty",
    price: 5.99,
    created: new Date(),
  },
];

/**
 * Récupère le produit dont l'id vaut `productId`
 * @param {*} productId
 */
const getProduct = (productId) => {
  return products.find((product) => product.id == productId);
};
/**
 * Supprime le produit dont l'id vaut `productId`
 * @param {*} productId
 */
const removeProduct = (productId) => {
  products = products.filter((product) => product.id != productId);
};
/**
 * Met à jour le produit dont l'id vaut `productId`
 * @param {*} productId
 * @param {*} updatedProduct
 */
const updateProduct = (productId, updatedProduct) => {
  products = products.map((product) =>
    product.id == productId ? updatedProduct : product
  );
};
/**
 * Génère et retourne le prochain id des produits
 * @param {*} products
 */
const getUniqueId = () => {
  const productsIds = products.map((product) => product.id);
  const maxId = productsIds.reduce((a, b) => Math.max(a, b));
  const uniqueId = maxId + 1;
  return uniqueId;
};

export { products, getProduct, removeProduct, updateProduct, getUniqueId };
