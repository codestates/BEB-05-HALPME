import db from "../db";

export default {
  getMypage: (userId) => {
    db.User.findOne({
      where: {
        userId: userId,
      },
    });
  },
};
