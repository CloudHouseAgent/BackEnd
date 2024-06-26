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
      const queryMessage = req.query.detaliiChirii;
      const queryNumarChirii = +req.query.numarChirii;
      console.log(
        `Query message: ${queryMessage} and query numar chirii: ${queryNumarChirii}`
      );

      const chirii = await this.chirieService.getChirii(
        queryMessage,
        queryNumarChirii
      );

      res.send(chirii);
    } catch (error) {
      console.log("Error at getting chirii: " + error.message);
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

      if (!chirieReq.isValid) {
        console.log("Error at validating chirie: " + chirieReq.message);
        return res.status(400).send(chirieReq.message);
      }

      const chirieData = chirieReq.data;

      const images = await uploadImages(files);
      chirieData.images = images;
      const chirie = await this.chirieService.createChirie(chirieData);
      res.send(chirie);
    } catch (error) {
      console.log("Error at creating chirie: " + error.message);
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

  async getChirieDescriptionFromParams(req, res) {
    try {
      const chirieObj = validator(req.user, req.body);
      if (!chirieObj.isValid) {
        res.status(400).send("Invalid chirie object: " + chirieObj.message);
        return;
      }

      delete chirieObj.data.id;
      delete chirieObj.data.images;
      delete chirieObj.data.contact;

      //console.log(chirieObj.data);

      const description =
        await this.chirieService.getChirieDescriptionFromParams(chirieObj.data);

      //console.log(description);

      res.send(description.message.content);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default ChirieController;
