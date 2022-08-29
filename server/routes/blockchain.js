import express from "express";
import Web3 from "web3";
import HALP_TOKEN from "../contract/build/contracts/HALPToken.json";
const router = express.Router();

// define web3
const getAccounts = async () => {
  try {
    const web3 = new Web3(new Web3.providers.HttpProvider(process.env.RPC_URL));
    const abi = HALP_TOKEN.abi;
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const contract = new web3.eth.Contract(abi, contractAddress);
    const balance = await contract.methods
      .balanceOf("0x3440fb56c51e6CA0369CfaC72632a3799B521F59")
      .call();
    return balance;
  } catch (e) {
    console.log(e);
    return e;
  }
};
router.get("/", (req, res) => {
  getAccounts().then((accounts) => {
    res.json({ data: accounts });
  });
});

export default router;
