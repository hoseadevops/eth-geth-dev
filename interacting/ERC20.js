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

eth.balanceOf = async function balanceOf (fromAddress, address) {
	return await contract.methods.balanceOf(address).call({ from: fromAddress });
}

eth.transfer = async function transfer (fromAddress, toAddress, value) {
	return await contract.methods.transfer(toAddress, value).send({ from: fromAddress })
		.on('transactionHash', (hash) => {
			console.log("transactionHash :", hash);
		})
		.on('confirmation', (confirmationNumber, receipt) => {
			console.log("confirmation :", confirmationNumber, receipt);
		})
		.on('error', console.error);
}

eth.run = async function run () {

	eth.transfer(alice, bob, 1000);

	await eth.balanceOf(alice, bob).then(balance => {
		console.log("bob: ", new BigNumber(balance));
	});
}



eth.run();