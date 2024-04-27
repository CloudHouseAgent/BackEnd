require("dotenv").config();

const cors = require("cors");
const url = require("url");
const bodyParser = require("body-parser");
const { ChiriiRouter } = require("./chirii-router");

const express = require("express");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/chirii", ChiriiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
