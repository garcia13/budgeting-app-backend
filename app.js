const express = require("express");
const cors = require('cors');
const transactionsController = require("./controllers/transactionsController");

const app = express();
app.use(express.json());  //adds "body" key to the req obj
app.use(cors());

app.use("/transactions", transactionsController);

// ROOT
app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});

// console.log every request
app.use((req, res, next) => {
  console.log(`${req.method} request made at ${req.url}`);
});

//404 catch all
app.get("*", (req, res) => {
  res.status(404).send("Page NOT Found!!!");
});

module.exports = app;
