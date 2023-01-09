// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract account {

    mapping (address => uint) private balances;

    function deposit() payable external {
        balances[msg.sender] += msg.value;
    }

    function withdrawAll() external {

        require(balances[msg.sender] > 0, "Not enough fund in balance");
        //require(balances[msg.sender] >= address(this).balance, "Not enough fund in contract");
  
        //payable(msg.sender).transfer(balances[msg.sender]);
        payable(msg.sender).call{value: balances[msg.sender]}("");
        balances[msg.sender] = 0;
        
    }
}