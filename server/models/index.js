import path from "path";
import { Sequelize } from "sequelize";
const basename = path.basename(__filename);
import Config from "../config/config.js";
const config = Config.development;
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    logging: false,
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 추후에 fs 로 리팩토링 예정 굳이 하나 하나 import 안하고 models에 있는 파일들 싹다 긁어오도록
import User from "./user";
import Post from "./post";
import Wallet from "./wallet";
import Metadata from "./metadata";
import Comment from "./comment";
import NFT from "./nft";

db.User = User(sequelize, Sequelize);
db.Post = Post(sequelize, Sequelize);
db.Wallet = Wallet(sequelize, Sequelize);
db.Metadata = Metadata(sequelize, Sequelize);
db.Comment = Comment(sequelize, Sequelize);
db.NFT = NFT(sequelize, Sequelize);

// associations
db.User.hasMany(db.Comment, { foreignKey: "id" });
db.Comment.belongsTo(db.User, { foreignKey: "id" });
db.User.hasOne(db.Wallet, { foreignKey: "id" });
db.Wallet.belongsTo(db.User, { foreignKey: "id" });
db.User.hasMany(db.Post, { foreignKey: "id" });
db.Post.belongsTo(db.User, { foreignKey: "id" });
db.Post.hasMany(db.Comment, { foreignKey: "postId" });
db.Comment.belongsTo(db.Post, { foreignKey: "postId" });
db.Wallet.hasMany(db.NFT, { foreignKey: "address" });
db.NFT.belongsTo(db.Wallet, { foreignKey: "address" });
db.NFT.hasOne(db.Metadata, { foreignKey: "tokenId" });
db.Metadata.belongsTo(db.NFT, { foreignKey: "tokenId" });

export default db;
