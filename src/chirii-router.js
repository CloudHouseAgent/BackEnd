import express from "express";
import ChirieController from "./controllers/chirie-controller.js";
const router = express.Router();
const controller = new ChirieController();
import verify from "./services/token-service.js";

router.get("/", (req, res) => {
  controller.getChirii(req, res);
});

router.get("/:id", (req, res) => {
  controller.getChirie(req, res);
});

router.delete("/:id", verify, (req, res) => {
  controller.deleteChirie(req, res);
});

router.post("/", verify, (req, res) => {
  controller.createChirie(req, res);
});

export default router;
