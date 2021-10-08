require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
const PRIVATE_KEY = process.env["TEST_PRIVATE_KEY"];
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
     
          url: "https://ropsten.infura.io/v3/febe4a0e7b8c467f940e40837e0913f2",
          accounts: [`0x${PRIVATE_KEY}`]
          }
          }
       
};
