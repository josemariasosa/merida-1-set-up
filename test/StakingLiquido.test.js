const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Staking Liquido", function () {
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, alice] = await ethers.getSigners();

    const StakingLiquido = await ethers.getContractFactory("StakingLiquido");
    const WETH = await ethers.getContractFactory("WETH");

    const weth = await WETH.deploy();
    await weth.waitForDeployment();

    const sleth = await StakingLiquido.deploy(weth.target);
    await sleth.waitForDeployment();


    return { weth, sleth, owner, alice };
  }

  describe("Deposit", function () {
    it("Deposit ETH", async function () {
      const { sleth, alice, weth } = await loadFixture(deployFixture);

      const aliceOriginalBalance = await hre.ethers.provider.getBalance(alice.address);
      const aliceDeposit = ethers.parseEther("10");

      // console.log(aliceOriginalBalance);

      // console.log(await ethers.provider.getBalance(weth.target));
      await sleth.connect(alice).depositETH({value: aliceDeposit});
      // console.log(await ethers.provider.getBalance(weth.target));
      // console.log(await hre.ethers.provider.getBalance(alice.address));

      expect(await sleth.balanceOf(alice.address)).to.be.equal(aliceDeposit);

    });
  });

  describe("Withdrawals", function () {
    it("Withdraw ETH", async function () {
      const { sleth, alice, weth } = await loadFixture(deployFixture);

      const aliceDeposit = ethers.parseEther("10");
      const aliceWithdraw = ethers.parseEther("5");

      await sleth.connect(alice).depositETH({value: aliceDeposit});
      expect(await sleth.balanceOf(alice.address)).to.be.equal(aliceDeposit);

      await sleth.connect(alice).approve(sleth.target, aliceWithdraw);
      await sleth.connect(alice).withdraw(aliceWithdraw);

      // expect(await weth.balanceOf(alice.address)).to.be.equal(aliceWithdraw);

      // console.log(await ethers.provider.getBalance(alice.address));
      // await weth.connect(alice).unwrap(aliceWithdraw);
      // expect(await weth.balanceOf(alice.address)).to.be.equal(0);

      // console.log(await ethers.provider.getBalance(alice.address));

    });
  });
});
