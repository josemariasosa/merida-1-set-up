// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @notice ONLY FOR LEARNING PURPOSES, DO NOT DEPLOY TO MAINNET

contract WETH is ERC20 {
    constructor() ERC20("Wrapped ETH", "WETH") {}

    function wrap() public payable {
        _mint(msg.sender, msg.value);
    }

    function unwrap(uint256 _amount) external {
        require(balanceOf(msg.sender) >= _amount);
        _burn(msg.sender, _amount);

        payable(msg.sender).transfer(_amount);
    }

    receive() external payable { wrap(); }
}
