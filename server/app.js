// before run plz npm install this -global
// npm install -g nodemon
// npm install -g sequelize-cli

// import
import dotenv from "dotenv";
import express from "express";
import db from "./db"; // ORM 연결
import cors from "cors";
// import cookieParser from "cookie-parser";
// import https from "https";
// import fs from "fs";

// import for route
import homeRouter from "./routes/home";
import apiRouter from "./routes/api";
import userRouter from "./routes/user";
import actionRouter from "./routes/action";
import blockchainRouter from "./routes/blockchain";

// config
dotenv.config();
const app = express();

// const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
// const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
// const credentials = { key: privateKey, cert: certificate };

// const server = https.createServer(credentials, app);

app.listen(process.env.PORT, async () => {
  console.log(`\nSERVER Listening on ${process.env.PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOption = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "OPTIONS"],
  optionsSuccessStatus: 200,
};
app.use(cors());
// app.use(cookieParser());
// routes
app.use("/", homeRouter);
app.use("/api", apiRouter);
app.use("/user", userRouter);
app.use("/action", actionRouter);
app.use("/blockchain", blockchainRouter);