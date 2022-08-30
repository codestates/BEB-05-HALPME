import express from "express";
import Web3 from "web3";

const router = express.Router();

// define web3
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

const getAccounts = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    return accounts;
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
