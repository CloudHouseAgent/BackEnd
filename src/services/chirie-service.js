import repository from "../repositories/chirie-repository.js";
import { v4 as uuid } from "uuid";
import pc from "../pinecone.js";
import openai from "./openai-service.js";

const indexName = "chirie-index";


class ChirieService {
  constructor() {
    this.chirieRepository = new repository();
  }

  async getChirie(id) {
    return await this.chirieRepository.getChirieById(id);
  }

  async getChirii(userQuery) {
    if (!userQuery) {
      return await this.chirieRepository.getChirii();
    }

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: userQuery,
      encoding_format: "float",
    });

    const embeddingsVector = embedding.data[0].embedding;

    console.log(`Embedding vector dimensions: ${embeddingsVector.length}`);
    const index = pc.index(indexName);

    const searchResults = await index.namespace("chirie").query({
      topK: 1,
      vector: embeddingsVector,
      includeValues: true,
    });

    console.log(`Search results length: ${searchResults.matches.length}`);

    const chirii = [];
    for (const match of searchResults.matches) {
      const chirie = await this.chirieRepository.getChirieById(match.id);
      chirii.push(chirie);
    }

    console.log(`Chirii length: ${chirii.length} si ids: ${chirii.map(chirie => chirie.id)}`);
    return chirii;
  }

  async getMyChirii(userId) {
    return await this.chirieRepository.getMyChirii(userId);
  }



  async createChirie(chirie) {
    chirie.id = uuid();
    const newChirie = await this.chirieRepository.createChirie(chirie);
    delete newChirie.images;

    const newChirieJson = JSON.stringify(newChirie);

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: newChirieJson,
      encoding_format: "float",
    });

    const embeddingsVector = embedding.data[0].embedding;

    console.log(`Embedding vector dimensions: ${embeddingsVector.length}`);

    const indexName = "chirie-index";
    const allIndexes = await pc.listIndexes();
    if (!allIndexes.indexes.find((index) => index.name === indexName)) {
      await pc.createIndex({
        name: indexName,
        dimension: 1536,
        metric: "cosine",
        spec: {
          serverless: {
            cloud: "aws",
            region: "us-east-1",
          },
        },
      });
      console.log(`Index ${indexName} created`);
    }

    const index = pc.index(indexName);

    await index.namespace("chirie").upsert([
      {
        id: chirie.id,
        values: embeddingsVector,
      }
    ])

    return newChirie;
  }

  async updateChirie(id, chirie) {
    chirie.id = id;
    return await this.chirieRepository.updateChirie(chirie);
  }

  async deleteChirie(id) {
    await this.chirieRepository.deleteChirie(id);

    const index = pc.index(indexName);
    await index.namespace("chirie").deleteOne(id);
  }
}

export default ChirieService;
