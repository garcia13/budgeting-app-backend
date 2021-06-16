const transactionsController = require("express").Router();
const transactionsArr = require("../models/transactionsArr");

// localhost:xxxx/transactions
transactionsController.get("/", (req, res) => {
    res.json(transactionsArr);
});

module.exports = transactionsController