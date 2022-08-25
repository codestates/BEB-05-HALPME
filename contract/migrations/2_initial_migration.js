const HALPToken = artifacts.require("HALPToken");

module.exports = function (deployer) {
  deployer.deploy(HALPToken, "halpToken", "HALP");
};