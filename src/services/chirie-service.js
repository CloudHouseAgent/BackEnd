import repository from "../repositories/chirie-repository.js";
import { v4 as uuid } from "uuid";

class ChirieService {
  constructor() {
    this.chirieRepository = new repository();
  }

  async getChirie(id) {
    return await this.chirieRepository.getChirieById(id);
  }

  async getChirii() {
    return await this.chirieRepository.getChirii();
  }

  async getMyChirii(userId) {
    return await this.chirieRepository.getMyChirii(userId);
  }

  async createChirie(chirie) {
    chirie.id = uuid();
    return await this.chirieRepository.createChirie(chirie);
  }

  async updateChirie(id, chirie) {
    chirie.id = id;
    return await this.chirieRepository.updateChirie(chirie);
  }

  async deleteChirie(id) {
    return await this.chirieRepository.deleteChirie(id);
  }
}

export default ChirieService;
