import express from "express";
import { products } from "../db/mock-product.mjs";
import { success } from "../helper.mjs";

const productsRouter = express();

productsRouter.get("/", (req, res) => {
  Product.findAll().then((products) => {
    const message = "La liste des produits a bien été récupérée.";
    res.json(success(message, products));
  });
});

productsRouter.get("/:id", (req, res) => {
  Product.findByPk(req.params.id).then((product) => {
    const message = `Le produit dont l'id vaut ${product.id} a bien été récupéré.`;
    res.json(success(message, product));
  });
});

productsRouter.post("/", (req, res) => {
  Product.create(req.body).then((createdProduct) => {
    // Définir un message pour le consommateur de l'API REST
    const message = `Le produit ${createdProduct.name} a bien été créé !`;
    // Retourner la réponse HTTP en json avec le msg et le produit créé
    res.json(success(message, createdProduct));
  });
});

productsRouter.delete("/:id", (req, res) => {
  Product.findByPk(req.params.id).then((deletedProduct) => {
    Product.destroy({
      where: { id: deletedProduct.id },
    }).then((_) => {
      // Définir un message pour le consommateur de l'API REST
      const message = `Le produit ${deletedProduct.name} a bien été supprimé !`;
      // Retourner la réponse HTTP en json avec le msg et le produit créé
      res.json(success(message, deletedProduct));
    });
  });
});

productsRouter.put("/:id", (req, res) => {
  const productId = req.params.id;
  Product.update(req.body, { where: { id: productId } }).then((_) => {
    Product.findByPk(productId).then((updatedProduct) => {
      // Définir un message pour l'utilisateur de l'API REST
      const message = `Le produit ${updatedProduct.name} dont l'id vaut ${updatedProduct.id} a été mis à jour avec succè`;
      // Retourner la réponse HTTP en json avec le msg et le produit créé
      res.json(success(message, updatedProduct));
    });
  });
});

export { productsRouter };
