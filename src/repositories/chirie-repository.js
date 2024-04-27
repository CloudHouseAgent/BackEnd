require("dotenv").config();
const { Chirie } = require("../models").Chirie;
const client = require("../db").client;

class ChirieRepository {
  constructor() {
    this.container = client
      .database(process.env.DB_ID)
      .container(process.env.CONTAINER_ID);
  }

  async getChirii() {
    const { resources } = await this.container.items.readAll().fetchAll();
    return resources;
  }

  async getChirieById(id) {
    const { resource } = await this.container.item(id).read();
    return resource;
  }

  async createChirie(chirie) {
    const { resource } = await this.container.items.create(chirie);
    return resource;
  }

  async updateChirie(chirie) {
    const { resource } = await this.container.item(chirie.id).replace(chirie);
    return resource;
  }

  async deleteChirie(id) {
    const { resource } = await this.container.item(id).delete();
    return resource;
  }
}

module.exports = { ChirieRepository };
