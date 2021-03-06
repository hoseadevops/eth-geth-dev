require('../env.config.js');
require('../config/identities.js');

const Web3 = require('web3');
const BigNumber = require('bignumber.js');
const alice_rpc = "http://127.0.0.1:" + rpc_port_alice;


const web3 = new Web3(alice_rpc);
const contractAddress = require('../truffle/build/contracts/ArmorsToken.json').networks[NETWORK_ID].address;
const contractABI = require('../truffle/build/contracts/ArmorsToken.json').abi;
const contract = new web3.eth.Contract(contractABI, contractAddress, { defaultAccount: alice });


var eth = {};

eth.run = async function run () {
	let transferBalance = new BigNumber("100000000000000000000");
	let user1 = "0xD766c3B6B14EcDe74939e348d1400B1F745bF761";
	web3.eth.sendTransaction({
	    from: alice,
	    to: user1,
			value: transferBalance
	}, function(error, hash)
	{
			console.log(error, hash);
			web3.eth.getBalance(alice).then(function(balance){
				console.log(balance);
			});
	});
}

eth.getBalance = async function (user, blockID) {
	web3.eth.getBalance(user).then(function(balance){
		console.log(balance);
	}).catch(function(e){
		console.log(e);
	});
}

module.exports = {
	eth
}
