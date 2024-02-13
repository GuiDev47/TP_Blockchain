// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.4;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;
    string public REF;

    event REFChanged(string newREF);
    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function get_unlock() public view returns (uint256){
        return unlockTime;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Mauvais proprietaire du contrat");
        _;
    }

    function setREF(string memory newREF) public onlyOwner {
        REF = newREF;
        emit REFChanged(newREF);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
