import walletService from "../services/wallet.service";

export default {
  findAll: async (req, res) => {
    const data = walletService.findAll();
    if (data) {
      res.json({ message: "ok", data: data });
    }
  },
  findByUserId: async (req, res) => {
    const data = walletService.findByUserId(req.params.id);
    if (data) {
      res.json({ message: "ok", data: data });
    }
  },
};
