import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("API REST of self service machine !");
});    

//redirectioner dans "api", sur localhost
app.get("/api/", (req, res) => {
    res.redirect(`http://localhost:${port}/`);
});

//toutes les routes vont commancer avec/api/...
import { productsRouter } from "./routes/products.mjs";
app.use("/api/products", productsRouter);


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
    