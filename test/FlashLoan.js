const Flashloan = artifacts.require("Flashloan");
const ethers  = require("ethers");

contract("Flashloan", (accounts) => {

    it("should preform a flashloan", async () => {
        let initBalanceInWei = await web3.eth.getBalance(accounts[0])
        console.log('Initial balance='+ethers.utils.formatEther(initBalanceInWei)) 



        let RESERVE_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
        let f = await Flashloan.deployed()

        await web3.eth.sendTransaction({to:f.address, from:accounts[0],value: ethers.utils.parseUnits("1.0")});      
        
        await f.flashloan(RESERVE_ADDRESS)


        let finalBalanceInWei = await web3.eth.getBalance(f.address)
        console.log('Final balance='+ethers.utils.formatEther(finalBalanceInWei)) 


    })
})