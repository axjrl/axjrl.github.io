/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { API_URL, PRIVATE_KEY, POLYGONSCAN_API } = process.env;
module.exports = {
   solidity: "0.8.1",
   defaultNetwork: "mumbai",
   networks: {
      hardhat: {},
      mumbai: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
      apiKey: POLYGONSCAN_API,
   }
}
