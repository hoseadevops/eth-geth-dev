#!/bin/bash

NC='\033[0m'      # Normal Color
RED='\033[0;31m'  # Error Color
CYAN='\033[0;36m' # Info Color

#--------------------------------------------
# 执行命令
#
# demo： run_cmd "mkdir -p $1"
#--------------------------------------------
function run_cmd() {
    local t=$(date)
    echo "$t: $1"
    eval $1
}

#--------------------------------------------
# 读取 文件中 key=value 的value
#
# demo: read_kv_config .env APP_NAME
function read_kv_config() {
    local file=$1
    local key=$2
    cat $file | grep "$key = " | awk -F '=' '{print $2}' | sed s/[[:space:]]//g
}

#--------------------------------------------
# geth 执行命令
#
# demo: exec_on_node a b
function exec_on_node() {
    geth --exec="$2" attach ./geth/$1/geth.ipc
}
