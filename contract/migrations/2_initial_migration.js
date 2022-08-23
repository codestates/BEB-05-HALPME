// 2_initial_migration.js
const SimpleToken = artifacts.require("SimpleToken");
module.exports = function (deployer) {
  deployer.deploy(SimpleToken);
};