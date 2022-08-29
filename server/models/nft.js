import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class NFT extends Model {}
  NFT.init(
    {
      tokenId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      URL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
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
      modelName: "NFT",
    }
  );
  return NFT;
};
