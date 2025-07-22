import hre from 'hardhat';

async function main() {
  console.log('🚀 deploy start');

  const factory = await hre.ethers.getContractFactory('HelloWorld');
  console.log('----');
  console.log('deploy after factory');
  console.log('----');
  const contract = await factory.deploy();

  await contract.deployed();

  console.log('contract deployed to:', contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
