// const ERC20Token = artifacts.require("ERC20Token");

// module.exports = function(deployer) {
//   deployer.deploy(ERC20Token);
// };

// const ArmorsToken = artifacts.require("ArmorsToken");
const TetherToken = artifacts.require("TetherToken");

module.exports = function(deployer) {
  deployer.deploy(TetherToken, 1550057493363429, "Tether USD","USDT", 6);
};
