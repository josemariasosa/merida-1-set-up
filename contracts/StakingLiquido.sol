// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

import {IWETH} from "./interfaces/IWETH.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract StakingLiquido is ERC20 {

    using SafeERC20 for IERC20;

    address immutable public weth;

    constructor(address _weth) ERC20("Staking Liquido ETH", "slETH") {
        weth = _weth;
    }

    function depositETH() external payable {
        IWETH(weth).wrap{value: msg.value}();
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 _amount) external {
        IERC20(address(this)).safeTransferFrom(msg.sender, address(this), _amount);
        _burn(address(this), _amount);

        IERC20(weth).safeTransfer(msg.sender, _amount);
    }
}
