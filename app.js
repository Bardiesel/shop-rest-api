const express = require("express");

const app = express();

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "Not Found",
  });
});

app.listen(3000);
