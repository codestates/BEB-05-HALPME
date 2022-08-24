import db from "../db";

export default {
  findAll: async () => {
    const data = await db.Wallet.findAll();
    return data;
  },
  findByUserId: async (id) => {
    const data = await db.Wallet.findAll({
      where: {
        id: id,
      },
    });
    return data;
  },
};
