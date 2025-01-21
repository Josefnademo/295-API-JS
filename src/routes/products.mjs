import express from "express";
import { products } from "../db/mock-product.mjs";
import { success } from "../helper.mjs";

const productsRouter = express();

productsRouter.get("/", (req, res) => {
  const message = `La liste des produits.`;
  res.json(success(message, products));
});

productsRouter.get("/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((product) => product.id == productId);
  const message = `Le produit dont l'id vaut ${productId} a bien été récupéré.`;
  res.json(success(message, product));
});

productsRouter.post("/", (req, res) => {
  // Création d'un nouvel id du produit
  // Dans les prochains versions, c'est MySQL qui gérera cela pour nous (identifiant auto_increment)
  const id = getUniqueId(products);

  // Création d'un objet avec les nouvelles informations du produits
  const createdProduct = { ...req.body, ...{ id: id, created: new Date() } };

  // Ajout du nouveau produit dans le tableau
  products.push(createdProduct);

  // Définir un message pour le consommateur de l'API REST
  const message = `Le produit ${createdProduct.name} a bien été créé !`;

  // Retourner la réponse HTTP en json avec le msg et le produit créé
  res.json(success(message, createdProduct));
});

productsRouter.delete("/:id", (req, res) => {
  const productId = req.params.id;
  let deletedProduct = getProduct(productId);
  removeProduct(productId);
  // Définir un message pour le consommateur de l'API REST
  const message = `Le produit ${deletedProduct.name} a bien été supprimé !`;
  // Retourner la réponse HTTP en json avec le msg et le produit créé
  res.json(success(message, deletedProduct));
});

productsRouter.put("/:id", (req, res) => {
  const productId = req.params.id;
  const product = getProduct(productId);
  // Mise à jour du produit
  // A noter que la propriété 'created' n'étant pas modifiée, sera conservée telle quelle.
  const updatedProduct = {
    id: productId,
    ...req.body,
    created: product.created,
  };
  updateProduct(productId, updatedProduct);
  // Définir un message pour l'utilisateur de l'API REST
  const message = `Le produit ${updatedProduct.name} dont l'id vaut ${productId} a été mis à jour avec succès !`;
  // Retourner la réponse HTTP en json avec le msg et le produit créé
  res.json(success(message, updatedProduct));
});

export { productsRouter };
