# Build Smart Contracts on ETH.

# dependency
- geth
- npm

# env

# Usage

```
git clone git@github.com:hoseadevops/eth-geth-dev.git ./

npm i

sh geth.sh init

sh geth.sh start alice
sh geth.sh start bob

sh geth.sh connect alice bob
sh geth.sh connect bob alice

personal.unlockAccount(eth.coinbase, "foobar123", 30000)

npm install

../node_modules/.bin/truffle compile

../node_modules/.bin/truffle migrate --network geth

node interacting/ERC20.js
```