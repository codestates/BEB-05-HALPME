import postService from "../services/post.service";
import jwt from "jsonwebtoken";

export default {
  findAllPost: async (req, res) => {
    try {
      const data = await postService.findAllPost();
      if (data) {
        res.json({ message: "ok", data: data });
      }
    } catch (err) {}
  },
  findPostByUserId: async (req, res) => {
    try {
      const user = await postService.findPostByUserId(req.params.id);
      if (user) {
        res.json({ message: "ok", data: user });
      }
    } catch (err) {}
  },
  findCommentByPostId: async (req, res) => {
    try {
      const comments = await postService.findCommentByPostId(req.params.postId);
      if (comments) {
        res.json({ message: "ok", data: comments });
      }
    } catch (err) {
      console.log(err);
      res.json({ message: "fail" });
    }
  },
  writePost: async (req, res) => {
    if (req.cookies) {
      const refreshToken = req.cookies["refreshToken"];
      const info = jwt.verify(refreshToken, "privateKey");
      const postObj = {
        id: info.id,
        title: req.body.title,
        contents: req.body.contents,
        category: req.body.category,
      };

      const data = await postService.writePost(
        postObj.id,
        postObj.title,
        postObj.contents,
        postObj.category
      );

      res.json(data);
    }
  },
  writeComment: async (req, res) => {
    const refreshToken = req.cookies["refreshToken"];
    const user = jwt.verify(refreshToken, "privateKey");
    const id = user.id;
    const commentObj = {
      contents: req.body.contents,
      id: id,
      postId: req.params.postId,
    };
    const comment = await postService.writeComment(
      commentObj.id,
      commentObj.postId,
      commentObj.contents
    );
    if (comment) {
      res.json({ message: "ok", data: comment });
    } else {
      res.json({ message: "An Error Occur" });
    }
  },
  selectComment: async (req, res) => {
    const commentId = req.params.commentId;
    const data = await postService.selectComment(commentId);
    if (data) {
      res.json({ message: "ok", data: data });
    }
  },
};
