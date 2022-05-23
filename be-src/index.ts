import * as express from "express";
import path = require("path");
import { createProduct } from "./controllers/product-controller";

const port = 3938;
const app = express();

app.use(express.json());

//signup
app.post("/products", async (req, res) => {
  if (!req.body) {
    res.status(404).json({
      message: "me faltan datos del body ",
    });
  }
  const newProduct = await createProduct(1, req.body);
  res.json({
    id: 1,
  });
});

app.get("*", function (req, res) {
  const ruta = path.resolve(__dirname, "../fe-src/index.html");
  res.sendFile(ruta);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
