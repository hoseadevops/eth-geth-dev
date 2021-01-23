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

# 初始哈
sh geth.sh init

# 首次挖矿 会创建 在家目录会创建 .ethash 等创建好后 就会挖矿了
sh geth.sh start alice
sh geth.sh start bob

#  链接彼此
sh geth.sh connect alice bob
sh geth.sh connect bob alice

# 解锁账户
personal.unlockAccount(eth.coinbase, "foobar123", 3000000)

# 合约



# 根据需要 修改truffle 配置 solc 编译版本 可以使用 docker 镜像
# 比如：0.4.25
# docker pull ethereum/solc:0.4.25

../node_modules/.bin/truffle compile
../node_modules/.bin/truffle migrate --network geth
# or
../node_modules/.bin/truffle migrate --network geth --reset

# 与合约交互
npm run test

# 清除
sh geth.sh clean
```
