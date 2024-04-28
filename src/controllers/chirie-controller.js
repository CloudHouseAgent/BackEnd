import service from "../services/chirie-service.js";
import validator from "../validators/validate-chirie.js";
import uploadImages from "../services/images-service.js";

class ChirieController {
  constructor() {
    this.chirieService = new service();
  }

  async getChirie(req, res) {
    try {
      const chirie = await this.chirieService.getChirie(req.params.id);

      if (!chirie) {
        return res.status(404).send();
      }

      res.send(chirie);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async getChirii(req, res) {
    try {
      const chirii = await this.chirieService.getChirii();
      res.send(chirii);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async getMyChirii(req, res) {
    try {
      const chirii = await this.chirieService.getMyChirii(req.user.sub);
      res.send(chirii);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async createChirie(req, res) {
    try {
      const files = req.files;
      const chirieReq = validator(req.user, JSON.parse(req.body.data));
      if (!chirieReq) {
        return res.status(400).send();
      }

      const images = await uploadImages(files);
      chirieReq.images = images;
      const chirie = await this.chirieService.createChirie(chirieReq);
      res.send(chirie);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async updateChirie(req, res) {
    try {
      const chirie = await this.chirieService.updateChirie(
        req.params.id,
        req.body
      );
      res.send(chirie);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async deleteChirie(req, res) {
    try {
      const chirie = await this.chirieService.deleteChirie(req.params.id);
      res.send(chirie);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default ChirieController;
