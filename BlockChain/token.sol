// MonContrat.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.4;

contract token {
    uint256 public REF_Object;

    function setREF(uint256 _valeur) public {
        REF_Object = _valeur;
    }

    function getREF() public view returns (uint256){
        return REF_Object;
    }
}


