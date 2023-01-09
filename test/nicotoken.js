const nicotoken = artifacts.require("nicotoken");


contract("nicotoken", (accounts) => {

    it("should say hi", async () => {
      const nicotokenInstance = await nicotoken.deployed();
      const msg = await nicotokenInstance.hi.call();
  
      assert.equal(msg, "Hello World", "hi did not return expected mesg");
    });

    it("should have an initial supply", async () => {
      const nicotokenInstance = await nicotoken.deployed();
      const supply = await nicotokenInstance.totalSupply.call();
  
      assert.equal(supply, 99);
    });

    it("first account receives all token", async () => {
      const nicotokenInstance = await nicotoken.deployed();
      const supply = await nicotokenInstance.balanceOf.call(accounts[0]);
  
      assert.equal(supply, 99);
    });

    it("should send token to another account when transfer", async () => {
      const nicotokenInstance = await nicotoken.deployed();
      await nicotokenInstance.transfer(accounts[1], 1, { from: accounts[0] });
      const balance1 = await nicotokenInstance.balanceOf.call(accounts[1]);
      const balance0 = await nicotokenInstance.balanceOf.call(accounts[0]);
      assert.equal(balance1, 1);
      assert.equal(balance0, 98);
    });
         
    it("should approve sending to another account when transferFrom", async () => {
      const nicotokenInstance = await nicotoken.deployed();
      await nicotokenInstance.approve(accounts[1], 1, { from: accounts[0] });
      await nicotokenInstance.transferFrom(accounts[0], accounts[2], 1, { from: accounts[1] });
      const balance2 = await nicotokenInstance.balanceOf.call(accounts[2]);
      const balance0 = await nicotokenInstance.balanceOf.call(accounts[0]);
      assert.equal(balance2, 1);
      assert.equal(balance0, 97);
    });                       
})