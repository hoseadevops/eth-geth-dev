// const ERC20Token = artifacts.require("ERC20Token");

// module.exports = function(deployer) {
//   deployer.deploy(ERC20Token);
// };

const TetherToken = artifacts.require("TetherToken");

module.exports = function(deployer) {
  deployer.deploy(TetherToken, 1000000000000000, 'Tether USD', 'USDT', 6);
};
