// before run plz npm install this -global
// npm install -g nodemon
// npm install -g sequelize-cli

// import
import dotenv from "dotenv";
import express from "express";
import db from "./models/index"; // ORM 연결

// config
dotenv.config();
const app = express();
app.listen(process.env.PORT, () => {
  console.log(process.env.SERVER_BANNER);
  console.log(`\n    SERVER Listening on ${process.env.PORT}`);
});

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("    DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

db.User.findAll;
// routes
