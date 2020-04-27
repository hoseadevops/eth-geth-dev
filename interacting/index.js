// const { eth } = require("./ERC20.js");

// const { Storage } = require("./Storage.js");

const { usdt } = require("./TetherToken.js");
const { arm } = require("./ArmorsToken.js");
const { eth } = require("./Eth.js");

// eth.run();

// Storage.run();

usdt.run();
arm.run();
eth.run();

// let testUser = "0x72960bfD5ed5CD3fcDe9F0d807f351c6d1586a20";
// eth.getBalance(testUser, 263);
