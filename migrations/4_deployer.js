var FlashLoan=artifacts.require ("Flashloan");

module.exports = function(deployer) {
    let lendingPoolAddressProvider = "0x24a42fD28C976A61Df5D00D0599C34c4f90748c8";
    deployer.deploy(FlashLoan, lendingPoolAddressProvider);
}