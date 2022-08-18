import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Comment extends Model {}
  Comment.init(
    {
      commentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      contents: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Comment",
      timestamps: true,
    }
  );
  return Comment;
};
