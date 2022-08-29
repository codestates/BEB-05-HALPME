import db from "../db";
import HALP_TOKEN from "../contract/build/contracts/HALPToken.json";
import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC_URL));
const abi = HALP_TOKEN.abi;
const contractAddress = process.env.CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(abi, contractAddress);
export default {
  transferToken: async (transaction) => {
    try {
      const user = await db.User.findOne({
        where: { id: transaction.id },
        attributes: ["id", "password"],
        raw: true,
      });
      await web3.eth.personal.unlockAccount(
        transaction.from,
        user.password,
        500,
        () => {
          console.log("unlocked!!");
        }
      );
      const data = await contract.methods
        .transfer(transaction.to, transaction.amount)
        .send({ from: transaction.from });
      // const rawTx = {
      //   to: contractAddress,
      //   gas: 1000000,
      //   data: data,
      // };

      const wallet = await db.Wallet.findOne({ where: { id: user.id } });
      // const signedTx = await web3.eth.personal.signTransaction(
      //   rawTx,
      //   wallet.privateKey
      // );

      // await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      const fromBalance = await contract.methods
        .balanceOf(transaction.from)
        .call();
      const toBalance = await contract.methods.balanceOf(transaction.to).call();
      await db.Wallet.update(
        { balance: fromBalance },
        { where: { address: transaction.from } }
      );
      await db.Wallet.update(
        { balance: toBalance },
        {
          where: {
            address: transaction.to,
          },
        }
      );
      console.log(toBalance);
    } catch (err) {
      console.log(err);
    }
  },
};
