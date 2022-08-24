const ICToken = artifacts.require("ICToken");

module.exports = function (deployer) {
  deployer.deploy(ICToken, "icToken!", "ICT");
};