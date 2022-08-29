import db from "../db";
import HALP_TOKEN from "../contract/build/contracts/HALPToken.json";
import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
const abi = HALP_TOKEN.abi;
const contractAddress = "0x8f8b76b315B14855f80d90e384396afd34A90B7D";
const contract = new web3.eth.Contract(abi, contractAddress);
export default {
  transferToken: async (transaction) => {
    const user = await db.User.findOne({
      where: { id: transaction.id },
      attributes: ["password"],
      raw: true,
    });
    await web3.eth.personal.unlockAccount(
      transaction.from,
      user.password,
      500,
      () => {
        console.log("Wallet unLocked!!");
      }
    );
    const data = await contract.methods
      .transfer(transaction.to, transaction.amount)
      .encodeABI();
    
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
    const fromBalance = await contract.methods.balanceOf(transaction.from).call();
    console.log(fromBalance);
    const toBalance = await contract.methods.balanceOf(transaction.to).call();
    await db.Wallet.update({balance:fromBalance},{where:{address:transaction.from}});
    await db.Wallet.update({balance:toBalance},{where:{
        address: transaction.to
    }})
  },
};
