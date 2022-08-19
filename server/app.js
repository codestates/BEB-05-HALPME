// before run plz npm install this -global
// npm install -g nodemon
// npm install -g sequelize-cli

// import
import dotenv from "dotenv";
import express from "express";
import db from "./db"; // ORM 연결

// import for route
import indexRouter from "./routes/index";

// config
dotenv.config();
const app = express();
app.listen(process.env.PORT, async () => {
  console.log(process.env.SERVER_BANNER);
  console.log(`\nSERVER Listening on ${process.env.PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", indexRouter);
