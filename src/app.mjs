import express from "express";

const app = express();
app.use(express.json());
const port = 3005;

app.get("/", (req, res) => {
  res.send("API REST of self service machine !");
});

//redirectioner dans "api", sur localhost
app.get("/api/", (req, res) => {
  res.redirect(`http://localhost:${port}/`);
});

//toutes les routes qui commancent avec /api/products, vont etre definir dans products.mjs
//Этот импорт загружает объект productsRouter из файла products.mjs, который находится в папке routes
import { productsRouter } from "./routes/products.mjs";
app.use("/api/products", productsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
