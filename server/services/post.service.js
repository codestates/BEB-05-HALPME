import db from "../db";

export default {
  findAllPost: async () => {
    const posts = await db.Post.findAll({ raw: true });
    return posts;
  },
  findPostByUserId: async (id) => {
    const post = await db.Post.findAll({
      where: {
        id: id,
      },
    });
    return post;
  },
};
