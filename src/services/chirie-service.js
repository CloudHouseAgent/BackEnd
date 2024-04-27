const repository =
  require("../repositories/chirie-repository").ChirieRepository;
const uuid = require("uuid");

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

  async createChirie(chirie) {
    chirie.id = uuid.v4();
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

module.exports = { ChirieService };
