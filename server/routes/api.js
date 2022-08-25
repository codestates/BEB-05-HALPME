import express, { raw } from "express";
import nftController from "../controllers/nft.controller";
import postController from "../controllers/post.controller";
import userController from "../controllers/user.controller";
import walletController from "../controllers/wallet.controller";
const router = express.Router();

// router.get("/user/:nickname", async (req, res) => {
//   const nickname = req.params.nickname;
//   const user = await db.User.findOne({
//     where: { nickname: nickname },
//     raw: true,
//   });
//   if (user) {
//     res.json({ message: "ok", data: user });
//   }
// });

// 유저 정보 얻기
router.get("/user-data", userController.findAllUser);
router.get("/user-data/:id", userController.findUserByUserId);

// 게시글 정보 얻기
router.get("/post-data", postController.findAllPost);
router.get("/post-data/:id", postController.findPostByUserId);

// 댓글 정보 얻기
router.get("/comment-data/:postId", postController.findCommentByPostId);

// NFT 정보 얻기
router.get("/nft-data", nftController.findAll);
router.get("/nft-data/:address", nftController.findByAddress);

// 지갑 정보 얻기
router.get("/wallet-data", walletController.findAll);
router.get("/wallet-data/:id", walletController.findByUserId);
export default router;
