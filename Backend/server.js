import express from "express";
import DishList from "./data/DishList.js";
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/collection/api/products", (req, res) => {
  res.json(DishList);
});
app.get("/collection/api/products/:id", (req, res) => {
  const product = DishList.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = 5000;
app.listen(PORT, console.log("Server running on port 5000"));
