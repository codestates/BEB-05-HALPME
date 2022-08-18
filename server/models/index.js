import path from "path";
import { Sequelize } from "sequelize";
const basename = path.basename(__filename);
import Config from "../config/config.json";
const config = Config.development;
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: "mysql",
    logging: false,
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 추후에 fs 로 리팩토링 예정
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
db.User.hasMany(db.Comment);
db.User.hasOne(db.Wallet);
db.User.hasMany(db.Post);
db.Post.hasMany(db.Comment);
db.Wallet.hasMany(db.NFT);
db.NFT.hasOne(db.Metadata);

export default db;
