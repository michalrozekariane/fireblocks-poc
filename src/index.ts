// import { hederaAssetID, vaultAdminID, vaultIssuerID } from './constants';
// import { deployERC3643Contract } from './fireblocks/contract-deploy';
// import { createTransaction } from './fireblocks/transaction';
// import { getVaultAccountDetails, listVaultAccounts } from './fireblocks/vaults';

import { registerToken } from './fireblocks/registerToken';


async function main() {
  // await createTransaction(hederaAssetID, '0.1', vaultAdminID, vaultIssuerID)
  // await deployERC3643Contract()
  // await listVaultAccounts()
  // await getVaultAccountDetails('0')
  await registerToken()
  return
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});