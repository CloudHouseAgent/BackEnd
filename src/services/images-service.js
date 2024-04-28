import { BlobServiceClient } from "@azure/storage-blob";

import "dotenv/config";
import { v4 as uuidv4 } from "uuid";

async function uploadImages(images) {
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    process.env.AZURE_STORAGE_BLOB_CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.AZURE_STORAGE_CONTAINER_NAME
  );

  const imagesUrls = [];

  for (const image of images) {
    const extension = image.originalname.split(".").pop();
    const blobName = `${uuidv4()}.${extension}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(
      image.buffer,
      image.size
    );
    imagesUrls.push(blockBlobClient.url);
  }

  return imagesUrls;
}

export default uploadImages;
