import nftService from "../services/nft.service";

export default {
  findAll: async (req, res) => {
    const data = await nftService.findAll();
    if (data) {
      res.json({ message: "ok", data: data });
    }
  },
  findByAddress: async (req, res) => {
    const data = await nftService.findByAddress(req.body.address);
    if (data) {
      res.json({ message: "ok", data: data });
    }
  },
};
