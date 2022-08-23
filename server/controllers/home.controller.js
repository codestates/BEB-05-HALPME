import homeService from "../services/home.service";

export default {
  getBoard: async (req, res) => {
    try {
      const data = await homeService.getBoard();
      console.log(data);
      res.json({ message: "ok", data: data });
    } catch (err) {}
  },
};
