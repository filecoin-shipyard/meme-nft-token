const MemeMarketplace = artifacts.require("MemeMarketplace");

module.exports = function (deployer) {
  deployer.deploy(MemeMarketplace);
};
