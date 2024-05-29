import express from "express";
import ChirieController from "./controllers/chirie-controller.js";
const router = express.Router();
const controller = new ChirieController();
import verify from "./services/token-service.js";

import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
});

router.get("/", (req, res) => {
  controller.getChirii(req, res);
});

router.get("/my", verify, (req, res) => {
  controller.getMyChirii(req, res);
});

router.get("/description", verify, (req, res) => {
  controller.getChirieDescriptionFromParams(req, res);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  controller.getChirie(req, res);
});

router.delete("/:id", verify, (req, res) => {
  controller.deleteChirie(req, res);
});

router.post("/", verify, upload.array("images", 5), (req, res) => {
  controller.createChirie(req, res);
});

export default router;
