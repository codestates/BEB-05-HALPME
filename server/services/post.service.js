import db from "../db";

export default {
  findAllPost: async () => {
    const posts = await db.Post.findAll({ raw: true });
    return posts;
  },
  findPostByUserId: async (id) => {
    const post = await db.Post.findAll({
      raw: true,
      where: {
        id: id,
      },
    });
    return post;
  },
  findCommentByPostId: async (postId) => {
    const comment = await db.Comment.findAll({
      raw: true,
      where: { postId: postId },
    });
    return comment;
  },
  writePost: async (id, title, contents, category) => {
    const post = await db.Post.create({
      id: id,
      title: title,
      category: category,
      contents: contents,
    });

    return { message: "ok", data: post };
  },
  writeComment: async (id, postId, contents) => {
    const comment = await db.Comment.create({
      id: id,
      postId: postId,
      contents: contents,
    });
    return comment;
  },
  selectComment: async (commentId) => {
    await db.Comment.update({ status: 1 }, { where: { commentId: commentId } });
    const comment = await db.Comment.findOne({
      where: { commentId: commentId },
    });
    await db.Post.update({ status: 1 }, { where: { postId: comment.postId } });
    return comment;
  },
};
