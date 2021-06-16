const transactionsController = require("express").Router();
const transactionsArr = require("../models/transactionsArr");

// localhost:xxxx/transactions <index>
transactionsController.get("/", (req, res) => {
  res.json(transactionsArr);
});

// localhost:xxxx/transactions <create>
transactionsController.post("/", (req, res) => {
  const { body } = req;
  transactionsArr.push(body);
  const newIndex = transactionsArr.length - 1;
  res.json(transactionsArr[newIndex]);
});

// localhost:xxxx/transactions/:index <show>
transactionsController.get("/:index", (req, res) => {
  const { index } = req.params;
  const transaction = transactionsArr[index];
  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("/404");
  }
});

// localhost:xxxx/transactions/:index <update>
transactionsController.put("/:index", (req, res) => {
  const { index } = req.params;
  const { body } = req;
  transactionsArr[index] = body;
  res.json(transactionsArr[index]);
});

// localhost:xxxx/transactions/:index <destroy>
transactionsController.delete("/:index", (req, res) => {
  const { index } = req.params;
  const deletedTransaction = transactionsArr.splice(index, 1);
  res.json(deletedTransaction);
});

module.exports = transactionsController;
