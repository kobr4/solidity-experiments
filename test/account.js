
const ethers  = require("ethers");
const account = artifacts.require("account");

contract("account", (accounts) => {

    it("should all deposit of funds", async () => {
        let initBalanceInWei = await web3.eth.getBalance(accounts[0])
        console.log('Initial balance='+ethers.utils.formatEther(initBalanceInWei)) 

        const accountInstance = await account.deployed();
        await accountInstance.deposit({value: ethers.utils.parseUnits("0.01"), from: accounts[0]});

        let balanceInWei = await web3.eth.getBalance(accounts[0])
        console.log('balance='+ethers.utils.formatEther(balanceInWei));
    });    

    it("should all deposit of funds another time", async () => {
        const accountInstance = await account.deployed();
        await accountInstance.deposit({value: ethers.utils.parseUnits("0.02"), from: accounts[0]});

        let balanceInWei = await web3.eth.getBalance(accounts[0])
        console.log('balance='+ethers.utils.formatEther(balanceInWei));
    });        

    it("should withdraw all fund for a given account", async () => {
        const accountInstance = await account.deployed();

        await accountInstance.withdrawAll({from: accounts[0]})
        let balanceInWei = await web3.eth.getBalance(accounts[0])
        console.log('balance='+ethers.utils.formatEther(balanceInWei))       
    });
})