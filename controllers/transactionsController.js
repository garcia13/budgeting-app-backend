const transactionsController = require("express").Router();
const transactionsArr = require("../models/transactionsArr");

transactionsController.get("/", (req, res) => {
    res.json(transactionsArr);
});