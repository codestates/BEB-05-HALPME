import { Op } from "sequelize";
import db from "../db";

export default {
  checkAlreadyUser: async (loginId, nickname) => {
    const user = await db.User.findOne({
      where: { [Op.or]: [{ loginId: loginId }, { nickname: nickname }] },
    });
    return user;
  },
};
