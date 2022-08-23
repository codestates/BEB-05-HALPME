import userService from "../services/user.service";

export default {
  findAllUser: async (req, res) => {
    try {
      const data = await userService.findAllUser();
      if (data) {
        res.json({ message: "ok", data: data });
      }
    } catch (err) {}
  },
  findUserByUserId: async (req, res) => {
    try {
      const data = await userService.findUserById(req.params.id);
      if (data) {
        res.json({ message: "ok", data: data });
      }
    } catch (err) {}
  },
};
