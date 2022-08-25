import express from "express";
import loginController from "../controllers/login.controller";
import signupController from "../controllers/signup.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("..");
});

router.get("/mypage", (req, res) => {
  res.send("mypage");
});

router.post("/login", loginController.login);

router.post("/signup", signupController.createUser);

export default router;
