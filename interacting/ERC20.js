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
	contract.methods.transfer(bob, 100).send({ from: alice }, function (error, transactionHash) {
		console.log("transfer to bob 100 => transactionHash: ", transactionHash);

		contract.methods.balanceOf(bob).call({ from: alice }).then(balance => {
			console.log("get balance from bob => balance: ", new BigNumber(balance));
		});
	});
}


module.exports = {
	eth
}