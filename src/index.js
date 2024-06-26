import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import ChiriiRouter from "./chirii-router.js";
import express from "express";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/chirii", ChiriiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
