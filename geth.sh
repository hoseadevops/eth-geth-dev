#!/bin/bash

set -e

project_path=$(
    cd $(dirname $0)
    pwd -P
)
source $project_path/bash.sh
developer_name=$('whoami')

network_id=$(read_kv_config .env NETWORK_ID)
base_port=$(read_kv_config .env BASE_PORT)
base_rpc_port=$(read_kv_config .env BASE_RPC_PORT)

IDENTITIES=(alice bob lily)

CMD=$1
case $CMD in

    init)
        for IDENTITY in ${IDENTITIES[@]}; do
            run_cmd "geth --datadir=./geth/$IDENTITY --networkid=$network_id --preload=config/identities.js init ./config/genesis.json"
        done
    ;;

    start)
        IDENTITY=$2
        if [ -z $IDENTITY ]; then
            echo "必须指定身份，可用身份: ${IDENTITIES[*]}"
            exit -1
        fi
        case $IDENTITY in
            alice)
                offset=1 
            ;;
            bob)
                offset=2
            ;;
            lily)
                offset=3
            ;;
        esac
        
        PORT=$((base_port + offset))
        RPC_PORT=$((base_rpc_port + offset))

        run_cmd "geth --datadir=./geth/$IDENTITY --port=$PORT --rpc --rpcport=$RPC_PORT --networkid=$network_id --preload=config/identities.js --nodiscover --verbosity=5 --mine --minerthreads=1 console 2>>./geth/$IDENTITY/geth.log"
    ;;
    
    connect)
        IDENTITY1=$2
        IDENTITY2=$3
        ENODE=$(exec_on_node $IDENTITY1 'admin.nodeInfo.enode')
        CONNECT_JS="admin.addPeer($ENODE)"
        exec_on_node $IDENTITY2 $CONNECT_JS
    ;;
    
    clean)
        for IDENTITY in ${IDENTITIES[@]}; do
            run_cmd "rm -r ./geth/$IDENTITY/geth"
        done
    ;;
    
    restart)
        run_cmd "sh $(basename "$0") clean"
        run_cmd "sh $(basename "$0") init"
        run_cmd "sh $(basename "$0") start alice"
    ;;

    *)

        USAGE="Name: sh $(basename "$0") - Command 创建和运行以太坊私有网络
    
        alice: 0xdda6ef2ff259928c561b2d30f0cad2c2736ce8b6 (initialized with 1 Ether)
        bob:   0x8691bf25ce4a56b15c1f99c944dc948269031801 (initialized with 1 Ether)
        lily:  0xb1b6a66a410edc72473d92decb3772bad863e243

        Usage:
            sh $(basename "$0") command [command options]

        Commands:
            init       通过配置【config/genesis.json】初始化私有网络 
            clean      重置
            start      启动以太坊节点 (example: 'start alice')
            connect    链接其他节点 (example: 'connect alice bob')
            help/*     输出help"
        echo "$USAGE"
        exit -1
    ;;
esac
