import { fireblocksSDK } from './client';

export async function listVaultAccounts() {
  const vaults = await fireblocksSDK.vaults.getPagedVaultAccounts();
  console.log('🚀 ~ listVaultAccounts ~ vaults:', vaults.data)
  return vaults;
}

export async function getVaultAccountDetails(id: string) {
  const vaultDetails = await fireblocksSDK.vaults.getVaultAccount({ vaultAccountId: id });
  console.log('🚀 ~ getVaultAccountDetails ~ vaultDetails:', vaultDetails.data)
  return vaultDetails;

}