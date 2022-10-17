// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract DustyTapes is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    string internal baseTokenUri;
    uint256 public maxPerWallet;
    uint256 public totalSupply;
    uint256 public maxSupply;
    bool public isPublicMintEnabled;

    constructor() ERC721("Dustytapes", "DT") {
        baseTokenUri = "https://axjrl.github.io/jsonapi/";
        maxPerWallet = 2;
        totalSupply = 1;
        maxSupply = 6;

    }
    function setIsPublicMintEnabled(bool isPublicMintEnabled_) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_;
    }

    function tokenURI(uint256 tokenId_) public view override returns (string memory) {
        return string(abi.encodePacked(baseTokenUri, Strings.toString(tokenId_), ".json"));
    }
    
    function mintNFT(address recipient) 
        external payable
    {
        require(isPublicMintEnabled);
        require(msg.value == 0.01 ether, 'Pay');
        require(totalSupply < maxSupply, 'Sold Out');
        require((balanceOf(msg.sender)) <= maxPerWallet, "Cannot exceed limit");
//TODO optimizer
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        totalSupply++;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI(newItemId));
        
    }
}