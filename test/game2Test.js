const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');
const { expect } = require('chai');


describe('Game2', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game2');
    const game = await Game.deploy();


     game.switchOn(20);
     game.switchOn(47);
     game.switchOn(212);
  
    return { game };
  }

  it('should be a winner', async function () {
    const { game } = await loadFixture(deployContractAndSetVariables);

  // Call switchOn with the right keOn





    await game.win();

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
