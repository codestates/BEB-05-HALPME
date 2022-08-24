import postService from "../services/post.service";

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
      const data = await postService.findByUserId(req.params.id);
      if (data) {
        res.json({ message: "ok", data: data });
      }
    } catch (err) {}
  },
};
