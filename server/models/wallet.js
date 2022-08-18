import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Wallet extends Model {}
  Wallet.init(
    {
      address: {
        type: DataTypes.CHAR(32),
        primaryKey: true,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Wallet",
      timestamps: false,
    }
  );
  return Wallet;
};
