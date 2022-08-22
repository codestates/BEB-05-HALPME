import express from "express";
import signupController from "../controllers/signup.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user router");
});

router.get("/mypage", (req, res) => {
  res.send("mypage");
});

router.get("/login", (req, res) => {
  res.send("login");
});

router.post("/signup", signupController.createUser);

export default router;
