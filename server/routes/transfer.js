import express from "express";
import transferController from "../controllers/transfer.controller";
const router = express.Router();

router.post("/token", transferController.transferToken);
router.post("/nft");

export default router;
