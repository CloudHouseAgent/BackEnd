const express = require("express");
const router = express.Router();
const chiriiController =
  require("./controllers/chirie-controller").ChirieController;
const controller = new chiriiController();

router.get("/", (req, res) => {
  controller.getChirii(req, res);
});

router.get("/:id", (req, res) => {
  controller.getChirie(req, res);
});

router.delete("/:id", (req, res) => {
  controller.deleteChirie(req, res);
});

router.post("/", (req, res) => {
  controller.createChirie(req, res);
});

module.exports = { ChiriiRouter: router };
