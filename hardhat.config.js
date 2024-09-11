require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      gas: 5000000,
      gasLimit: 5000000,
      maxFeePerGas: 55000000000,
      maxPriorityFeePerGas: 55000000000,
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      }
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "49J1XNDT8N1QI7RG97PZT6KSM2GSPAHCXT" //cspell:disable-line
  },
};
