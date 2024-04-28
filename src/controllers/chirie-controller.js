import service from "../services/chirie-service.js";
import validator from "../validators/validate-chirie.js";

class ChirieController {
  constructor() {
    this.chirieService = new service();
  }

  async getChirie(req, res) {
    try {
      const chirie = await this.chirieService.getChirie(req.params.id);
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

  async createChirie(req, res) {
    try {
      const chirieReq = validator(req.user, req.body);
      if (!chirieReq) {
        return res.status(400).send();
      }
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
