// import { deployERC3643Contract } from './fireblocks/contract-deploy';
import { getVaultAccountDetails, listVaultAccounts } from './fireblocks/vaults';

async function main() {
  // await deployERC3643Contract()
  await listVaultAccounts()
  await getVaultAccountDetails('5')
  return
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});