const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');
const { expect } = require('chai');


describe('Game1', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game1');
    const game = await Game.deploy();

    return { game };
  }

  it('should be a winner', async function () {
    // leave this as-is
    const { game } = await loadFixture(deployContractAndSetVariables);


      expect(await game.unlocked()).to.equal(false);

      await game.unlock();

      expect(await game.isWon()).to.equal(false);

      
    
    
    
    
    
    
    
    
    //expect(game.unlocked).to.equal(true);

    //await game.unlock
    //await require(game.isWon == true)
      


  
    // you must call unlock before you can win

    await game.win();

    // leave this testing assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
