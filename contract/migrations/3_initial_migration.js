// 3_initial_migartion.js
// const MyNFTs = artifacts.require("MyNFTs");
const MyNFTs = artifacts.require("ERC721.sol");
module.exports = function (deployer) {
  deployer.deploy(MyNFTs);
};