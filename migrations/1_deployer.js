var nicotoken=artifacts.require ("nicotoken");

module.exports = function(deployer) {
    deployer.deploy(nicotoken);
}