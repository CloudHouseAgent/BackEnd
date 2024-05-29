import client from "../db.js";
import "dotenv/config";

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

  async getMyChirii(userId) {
    const querySpec = {
      query: "SELECT * FROM c WHERE c.contact.userId = @userId",
      parameters: [{ name: "@userId", value: userId }],
    };

    const { resources } = await this.container.items
      .query(querySpec)
      .fetchAll();
    return resources;
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

export default ChirieRepository;
