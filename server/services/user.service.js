import db from "../db";

export default {
  findAllUser: async () => {
    const users = await db.User.findAll({ raw: true });
    return users;
  },
  findUserById: async (id) => {
    const user = await db.User.findAll({
      raw: true,
      where: { id: id },
    });
    return user;
  },
  findUserByNickname: async (nickname) => {
    const user = await db.User.findAll({
      raw: true,
      where: { nickname: nickname },
    });
  },
  createUser: async (userObj) => {
    await db.User.create({
      loginId: userObj.loginId,
      password: userObj.password,
      nickname: userObj.nickname,
      address: userObj.address,
      role: userObj.role,
    });
  },
};
