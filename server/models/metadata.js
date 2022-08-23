import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Metadata extends Model {}
  Metadata.init(
    {
      metadataId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      describe: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Metadata",
      timestamps: false,
    }
  );
  return Metadata;
};
