pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract ERC20Token is ERC20, ERC20Detailed {
    
    uint private INITIAL_SUPPLY = 10000e18;
    
    constructor () public
    ERC20Detailed("ERC20Token", "ERC20", 18)
    {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}