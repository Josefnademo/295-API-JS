import { Sequelize, DataTypes } from "sequelize";
import { ProductModel } from "../models/products.mjs";
import { products } from "./mock-product.mjs";

// Configuration de la connexion Sequelize
const sequelize = new Sequelize(
  "db_products", // Nom de la DB
  "root", // Nom d'utilisateur
  "root", // Mot de passe
  {
    host: "localhost",
    port: 6033,
    dialect: "mysql",
    logging: false, // Désactiver les logs Sequelize pour une console plus propre
  }
);

// Initialisation du modèle Product
const Product = ProductModel(sequelize, DataTypes);

// Fonction pour initialiser la base de données
const initDb = async () => {
  try {
    // Synchronise le modèle avec la base de données
    await sequelize.sync({ force: true }); // Attention : force supprime toutes les données existantes
    console.log("La base de données db_products a bien été synchronisée");

    // Importation des produits mock
    await importProducts();
    console.log("Les produits mock ont été importés avec succès !");
  } catch (error) {
    console.error(
      "Erreur lors de l'initialisation de la base de données :",
      error
    );
  }
};

// Fonction pour importer les produits mock
const importProducts = async () => {
  try {
    // Utiliser une boucle for-await pour garantir que chaque création est terminée avant la suivante
    for (const product of products) {
      await Product.create({
        name: product.name,
        price: product.price,
      });
    }
  } catch (error) {
    console.error("Erreur lors de l'importation des produits :", error);
  }
};

// Exporter les ressources nécessaires
export { sequelize, initDb, Product };
