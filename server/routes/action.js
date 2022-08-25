import express from "express";
import postController from "../controllers/post.controller";
import writeRouter from "./write";
const router = express.Router();

router.use("/write", writeRouter);

router.get("/", (req, res) => {
  res.redirect("..");
});

router.post("/comment/select/:commentId", postController.selectComment);
export default router;
