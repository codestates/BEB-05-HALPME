// 2_initial_migration.js
const ICToken = artifacts.require("ICToken");
module.exports = function (deployer) {
  deployer.deploy(ICToken);
};