import loginService from "../services/login.service";

export default {
  login: async (req, res) => {
    const loginId = req.body.loginId;
    const password = req.body.password;
    const data = await loginService.login(loginId, password);
    if (data) {
      res.cookie("refreshToken", data.refreshToken, {
        domain: "localhost",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: "None",
      });
      res.json({ message: "ok", data: data.userInfo });
    } else {
      res.json({ message: "Wrong Password", data: null });
    }
  },
};
