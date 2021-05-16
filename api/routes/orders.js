const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "Get Orders",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    msg: "Post Orders",
  });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    msg: "order details",
    orderId: req.params.orderId,
  });
});

router.delete("/:orderId", (req, res, next) => {
  res.status(200).json({
    msg: "Delete Order",
    orderId: req.params.orderId,
  });
});

module.exports = router;
