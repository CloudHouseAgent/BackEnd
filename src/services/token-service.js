import "dotenv/config";
import jwt from "jsonwebtoken";

const publicKey = process.env.CLERK_PEM_PUBLIC_KEY;

async function verify(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.decode(token, publicKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
  }
}

export default verify;
