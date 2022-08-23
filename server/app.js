// before run plz npm install this -global
// npm install -g nodemon
// npm install -g sequelize-cli

// import
import dotenv from "dotenv";
import express from "express";
import db from "./db"; // ORM 연결
import cors from "cors";

// import for route
import homeRouter from "./routes/home";
import apiRouter from "./routes/api";
import userRouter from "./routes/user";

// config
dotenv.config();
const app = express();
app.listen(process.env.PORT, async () => {
  console.log(process.env.SERVER_BANNER);
  console.log(`\nSERVER Listening on ${process.env.PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/", homeRouter);
app.use("/api", apiRouter);
app.use("/user", userRouter);
