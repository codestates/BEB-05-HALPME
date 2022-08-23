import signupService from "../services/signup.service";
import userService from "../services/user.service";

export default {
  createUser: async (req, res) => {
    try {
      const userObj = {
        loginId: req.body.loginId,
        password: req.body.password,
        nickname: req.body.nickname,
        address: "12345678912345678912345678912345",
        role: 0,
      };
      const already = await signupService.checkAlreadyUser(
        userObj.loginId,
        userObj.nickname
      );
      if (already) {
        res.json({ message: "Already Exist User" });
      } else {
        await userService.createUser(userObj);
        res.json({
          message: "ok",
        });
      }
    } catch (err) {
      console.log(err);
      res.json({ message: "An Error Occured" });
    }
  },
};
