const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "Get from Products",
  });
});

router.post("/", (req, res, next) => {
  const product = {
    title: req.body.title,
    price: req.body.price,
  };
  res.status(200).json({
    msg: "Post from Products",
    createdProduct: product,
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "book") {
    res.status(200).json({
      msg: "Book",
    });
  } else {
    res.status(200).json({
      msg: "Product not Found!",
    });
  }
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    msg: "Delete Product",
    productId: req.params.productId,
  });
});

module.exports = router;
