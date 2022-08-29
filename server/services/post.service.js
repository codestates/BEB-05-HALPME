import db from "../db";
import Web3 from "web3";
import HALP_TOKEN from "../contract/build/contracts/HALPToken.json";

const abi = HALP_TOKEN.abi;
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(abi, contractAddress);
const server_address = process.env.SERVER_ADDRESS;
export default {
  findAllPost: async () => {
    const posts = await db.Post.findAll({ raw: true });
    return posts;
  },
  findPostByUserId: async (id) => {
    const post = await db.Post.findAll({
      raw: true,
      where: {
        id: id,
      },
    });
    return post;
  },
  findCommentByPostId: async (postId) => {
    const comment = await db.Comment.findAll({
      raw: true,
      where: { postId: postId },
    });
    return comment;
  },
  writePost: async (id, title, contents, category) => {
    const post = await db.Post.create({
      id: id,
      title: title,
      category: category,
      contents: contents,
    });

    return { message: "ok", data: post };
  },
  writeComment: async (id, postId, contents) => {
    const comment = await db.Comment.create({
      id: id,
      postId: postId,
      contents: contents,
    });
    return comment;
  },
  selectComment: async (commentId) => {
    await db.Comment.update({ status: 1 }, { where: { commentId: commentId } });
    const comment = await db.Comment.findOne({
      where: { commentId: commentId },
    });
    await db.Post.update({ status: 1 }, { where: { postId: comment.postId } });

    await web3.eth.personal.unlockAccount(server_address, "1234", 500);

    const wallet = await db.Wallet.findOne({ where: { id: comment.id } });
    const toAddress = wallet.address;
    console.log(toAddress);
    const data = await contract.methods.transfer(toAddress, 1).encodeABI();
    const rawTx = {
      to: contractAddress,
      gas: 1000000,
      data: data,
    };
    const signedTx = await web3.eth.accounts.signTransaction(
      rawTx,
      process.env.SERVER_SECRET_KEY
    );
    await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    const fromBalance = await contract.methods.balanceOf(server_address).call();
    const toBalance = await contract.methods.balanceOf(toAddress).call();
    await db.Wallet.update({ balance: fromBalance }, { where: { id: 1 } });
    await db.Wallet.update(
      { balance: toBalance },
      {
        where: {
          address: toAddress,
        },
      }
    );
    return comment;
  },
};
