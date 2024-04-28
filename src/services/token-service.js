import "dotenv/config";
import jwt from "jsonwebtoken";

const publicKey = process.env.CLERK_PEM_PUBLIC_KEY;

async function verify(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, publicKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Unauthorized" });
  }
}

export default verify;
