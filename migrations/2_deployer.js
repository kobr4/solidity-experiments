var account=artifacts.require ("account");

module.exports = function(deployer) {
    deployer.deploy(account);
}