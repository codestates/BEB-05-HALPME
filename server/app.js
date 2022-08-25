// before run plz npm install this -global
// npm install -g nodemon
// npm install -g sequelize-cli

// import
import dotenv from "dotenv";
import express from "express";
import db from "./db"; // ORM 연결
import cors from "cors";
import cookieParser from "cookie-parser";

// import for route
import homeRouter from "./routes/home";
import apiRouter from "./routes/api";
import userRouter from "./routes/user";
import actionRouter from "./routes/action";

// config
dotenv.config();
const app = express();
app.listen(process.env.PORT, async () => {
  console.log(`\nSERVER Listening on ${process.env.PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOption = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors());
app.use(cookieParser());

// routes
app.use("/", homeRouter);
app.use("/api", apiRouter);
app.use("/user", userRouter);
app.use("/action", actionRouter);
