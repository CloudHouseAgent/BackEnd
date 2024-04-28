import { CosmosClient } from "@azure/cosmos";

const endpoint = process.env.DB_ENDPOINT;
const key = process.env.DB_KEY;
const databaseId = process.env.DB_ID;
const containerId = process.env.CONTAINER_ID;

const options = {
  endpoint: endpoint,
  key: key,
  userAgentSuffix: "CosmosDBJavascriptQuickstart",
};

const client = new CosmosClient(options);

/**
 * Create the database if it does not exist
 */
async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({
    id: databaseId,
  });
  console.log(`Created database:\n${database.id}\n`);
}

/**
 * Read the database definition
 */
async function readDatabase() {
  const { resource: databaseDefinition } = await client
    .database(databaseId)
    .read();
  console.log(`Reading database:\n${databaseDefinition.id}\n`);
}

/**
 * Create the container if it does not exist
 */
async function createContainer() {
  const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists({ id: containerId, partitionKey });
  console.log(`Created container:\n${config.container.id}\n`);
}

/**
 * Read the container definition
 */
async function readContainer() {
  const { resource: containerDefinition } = await client
    .database(databaseId)
    .container(containerId)
    .read();
  console.log(`Reading container:\n${containerDefinition.id}\n`);
}

createDatabase()
  .then(() => readDatabase())
  .then(() => readContainer())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export default client;
