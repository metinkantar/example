import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import bcrypt from "bcryptjs";
import UserModel from "../../../models/User";
import MeKaErrorResponse from "../../../utils/meka_error-response";
import dbConnect from "../../../libs/dbConnect";

const secretKey = process.env.JWT_SECRET;
const expireTime = process.env.JWT_EXPIRE;

export default async function loginHandler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    await dbConnect();
    if (!email || !password) {
      return next(new MeKaErrorResponse("Lütfen e-posta ve şifre girin."), 400);
    }
    try {
      const user = await UserModel.findOne({ email }).select("+password");
      if (!user) {
        return next(new MeKaErrorResponse("Geçersiz giriş bilgileri", 401));
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return next(new MeKaErrorResponse("Geçersiz giriş bilgileri", 401));
      }
      const token = sign({ _id: user._id, isAdmin: user.isAdmin }, secretKey, { expiresIn: expireTime });
      const serialised = serialize("refreshToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
        path: "/",
      });
      res.setHeader("Set-Cookie", serialised);
      res.status(200).json({ _id: user._doc._id, isAdmin: user._doc.isAdmin, token });
    } catch (error) {
      res.status(500).json({ status: false, error_message: error.message });
    }
  } else {
    res.status(500).json({ status: false, error_message: "Post İşlemi Sadece" });
  }
}