const express = require("express");
const mongoose = require("mongoose");

const app = express();

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

mongoose.connect("mongodb://localhost:27017/rest-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "*");
    return res.status(200).json();
  }
  next();
});

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "Not Found",
  });
});

app.listen(3000);
