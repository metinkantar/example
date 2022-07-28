/* eslint-disable import/no-anonymous-default-export */
import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.refreshToken;

  if (!jwt) {
    return res.json({ message: "Giriş Yapılmadı!" });
  } else {
    const serialised = serialize("refreshToken", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Başarıyla çıkış yapıldı!" });
  }
}
