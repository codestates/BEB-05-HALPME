// 3_initial_migartion.js
const MyNFTs = artifacts.require("MyNFTs");
module.exports = function (deployer) {
  deployer.deploy(MyNFTs);
};