const transactionsController = require("express").Router();
const transactionsArr = require("../models/transactionsArr");

// localhost:xxxx/transactions
transactionsController.get("/", (req, res) => {
  res.json(transactionsArr);
});

// localhost:xxxx/transactions/:index
transactionsController.get("/:index", (req, res) => {
  const { index } = req.params;
  const transaction = transactionsController[index];
  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("/404");
  }
});

module.exports = transactionsController;
