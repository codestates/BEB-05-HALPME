import express from "express";
import postController from "../controllers/post.controller";

const router = express.Router();

router.post("/post", postController.writePost);
router.post("/comment/:postId", postController.writeComment);

export default router;
