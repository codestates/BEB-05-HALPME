import db from "../db";

export default {
  // 홈페이지에서 보여질 화면
  getBoard: async () => {
    try {
      const posts = await db.Post.findAll({
        raw: true,
        include: [
          {
            model: db.User,
            attributes: ["nickname"],
          },
        ],
      });
      return posts;
    } catch (err) {}
  },
};
