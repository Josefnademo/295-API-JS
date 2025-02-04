import express from "express";

import { sequelize } from "./db/sequelize.mjs";
import { initDb } from "./db/sequelize.mjs";

import { productsRouter } from "./routes/products.mjs";
app.use("/api/products", productsRouter);
import { loginRouter } from "./routes/login.mjs";
app.use("/api/login", loginRouter);
import swaggerUi from "swagger-ui-express";

const app = express(); //express framework
app.use(express.json()); //middleware
const port = 3000;

sequelize
  .authenticate()
  .then((_) =>
    console.log("La connexion à la base de données a bien été établie")
  )
  .catch((error) => console.error("Impossible de se connecter à la DB"));
initDb();

// Route pour accéder à la documentation Swagger
//const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { explorer: true })
);

//racine de depart, message
app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

//redirectioner dans "api", sur localhost
app.get("/api/", (req, res) => {
  res.redirect(`http://localhost:${port}/`);
});

//toutes les routes qui commancent avec /api/products, vont etre definir dans products.mjs
//Этот импорт загружает объект productsRouter из файла products.mjs, который находится в папке routes
app.use("/api/products", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// Si aucune route ne correspondant à l'URL demandée par le consommateur
app.use((req, res) => {
  const message =
    "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json(message);
});

productsRouter.get("/", (req, res) => {
  Product.findAll()
    .then((products) => {
      const message = "La liste des produits a bien été récupérée.";
      res.json(success(message, products));
    })
    .catch((error) => {
      const message =
        "La liste des produits n'a pas pu être récupérée. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
    });
});
