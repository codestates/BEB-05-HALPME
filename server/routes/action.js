import express from "express";
import postController from "../controllers/post.controller";
import writeRouter from "./write";
import transferRouter from "./transfer";
const router = express.Router();

router.use("/write", writeRouter);
router.use("/transfer", transferRouter);
router.get("/", (req, res) => {
  res.redirect("..");
});
router.post("/comment/select/:commentId", postController.selectComment);

export default router;
