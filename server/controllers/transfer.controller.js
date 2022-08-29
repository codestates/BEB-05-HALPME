import transferService from "../services/transfer.service";

export default {
  transferToken: async (req, res) => {
    const transactionObj = {
      id: req.query.id,
      from: req.query.from,
      to: req.body.to,
      amount: req.body.amount,
    };
    const data = await transferService.transferToken(transactionObj);

    res.json({ message: "ok", data: data });
  },
};
