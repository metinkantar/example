import dbConnect from "../../../libs/dbConnect";
import User from "../../../models/User";
import { sign } from "jsonwebtoken";

export default async function registerHandler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    const { name, email, password } = req.body;
    try {
      const user = await User.create({ name, email, password });
      const token = sign(
        { _id: user._id, isAdmin: this.isAdmin },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRE,
        }
      );
      res.status(statusCode).json({ ...user._doc, token });
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
}
