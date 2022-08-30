import db from "../models";
import Jwt from "jsonwebtoken";

const generateToken = (user) => {
  const options = {
    algorithm: "HS256",
    expiresIn: "7d",
  };
  const payload = {
    id: user.id,
    nickname: user.nickname,
    role: user.role,
    createdAt: user.createdAt,
  };

  return Jwt.sign(payload, "privateKey", options);
};

export default {
  login: async (loginId, password) => {
    const user = await db.User.findOne({ where: { loginId: loginId } });
    if (user) {
      return user.password == password
        ? {
            refreshToken: generateToken(user),
            userInfo: { id: user.id, nickname: user.nickname, role: user.role },
          }
        : undefined;
    } else {
      return undefined;
    }
  },
};
