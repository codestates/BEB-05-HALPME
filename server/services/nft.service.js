import db from "../db";

export default {
  findAll: async () => {
    const data = await db.NFT.findAll();
    if (data) {
      return data;
    }
  },
  findByAddress: async (address) => {
    const data = await db.NFT.findAll({ where: { address: address } });
    if (data) {
      return data;
    }
  },
};
