// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./ierc20.sol";

contract nicotoken is IERC20 {

  function hi() public pure returns (string memory) {        
    return ("Hello World");    
  }

  constructor() {
    _totalSupply = 99;
    balances[msg.sender] = _totalSupply;
  }

  mapping (address => uint) private balances;
  uint private _totalSupply;

  mapping (address => mapping (address => uint)) private allowances;

  function totalSupply() external view returns (uint) {
    return _totalSupply;
  }

  function balanceOf(address account) external view returns (uint) {
    return balances[account];
  }

  function transfer(address recipient, uint amount) external returns (bool) {
    require (balances[msg.sender]>=amount, "Insufficient amount in sender balance");
    balances[msg.sender] -= amount;
    balances[recipient] += amount;
    emit Transfer(msg.sender, recipient, amount);
    return true;
  }

  function allowance(address owner, address spender) external view returns (uint) {
    return allowances[owner][spender];
  }

  function approve(address spender, uint amount) external returns (bool) {
    allowances[msg.sender][spender] += amount;
    emit Approval(msg.sender, spender, amount);
    return true;
  }

  function transferFrom(address sender, address recipient, uint amount) external returns (bool) {
    require(allowances[sender][msg.sender] >= amount, "Insufficient allowed amount");
    require (balances[sender]>=amount, "Insufficient amount in sender balance");    
    allowances[sender][msg.sender] -= amount;
    balances[sender] -= amount;
    balances[recipient] += amount;    
    return true;
  }


}
