require('../env.config.js');
require('../config/identities.js');

const Web3 = require('web3');
const BigNumber = require('bignumber.js');
const alice_rpc = "http://127.0.0.1:" + rpc_port_alice;


const web3 = new Web3(alice_rpc);
const contractAddress = require('../truffle/build/contracts/ERC20Token.json').networks[NETWORK_ID].address;
const contractABI = require('../truffle/build/contracts/ERC20Token.json').abi;
const contract = new web3.eth.Contract(contractABI, contractAddress, { defaultAccount: alice });


var eth = {};

eth.run = async function run () {
	// let transferBalance = new BigNumber("100000000000000000000000000000000000000000000000000000000000000000000000000");

	let transferBalance = new BigNumber("1000000000000000000000");
	let user1 = "0x78C0bC1566c36206Fe7b2c8Df9027353cFC13dDD";
	contract.methods.transfer(user1, transferBalance.toFixed()).send({ from: alice }, function (error, transactionHash) {
		console.log("transfer to user1 100 => transactionHash: ", transactionHash, error);

		contract.methods.balanceOf(user1).call({ from: alice }).then(balance => {
			console.log("get balance from user1 => balance: ", new BigNumber(balance));
		});
	});
}


module.exports = {
	eth
}