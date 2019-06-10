require('../env.config.js');
require('../config/identities.js');

const Web3 = require('web3');
const BigNumber = require('bignumber.js');
const alice_rpc = "http://127.0.0.1:" + rpc_port_alice;


const web3 = new Web3(alice_rpc);
const contractAddress = require('../truffle/build/contracts/ERC20Token.json').networks[NETWORK_ID].address;
const contractABI = require('../truffle/build/contracts/ERC20Token.json').abi;
const contract = new web3.eth.Contract(contractABI, contractAddress, { defaultAccount: alice });


var Storage = {};

Storage.run = async function run () {
    let transferBalance = new BigNumber("100000000000000000000000000000000000000000000000000000000000000000000000000000");
    let user1 = "0x78C0bC1566c36206Fe7b2c8Df9027353cFC13dDD";

    for (index = 0; index < 20; index++) {
        console.log(`[${index}]` + await web3.eth.getStorageAt(contractAddress, index, 310))
    }

    // index = '0000000000000000000000000000000000000000000000000000000000000005'
    // key = '00000000000000000000000x78C0bC1566c36206Fe7b2c8Df9027353cFC13dDD'
    // let newKey = web3.utils.sha3(key + index, { "encoding": "hex" })
    // console.log(await web3.eth.getStorageAt(contractAddress, newKey))
}


module.exports = {
    Storage
}