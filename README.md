# Build Smart Contracts on ETH.

# dependency
- geth
- npm

# env

# Usage

```
git clone git@github.com:hoseadevops/eth-geth-dev.git ./

npm i

sh geth.sh help

sh geth.sh init

sh geth.sh start alice
sh geth.sh start bob

sh geth.sh connect alice bob
sh geth.sh connect bob alice

personal.unlockAccount(eth.coinbase, "foobar123", 3000000)

../node_modules/.bin/truffle compile

../node_modules/.bin/truffle migrate --network geth
// or
 ../node_modules/.bin/truffle migrate --network geth --reset

npm run test

sh geth.sh clean
```