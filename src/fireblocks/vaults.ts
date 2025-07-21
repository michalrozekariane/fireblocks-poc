import { fireblocks } from './client';

export async function listVaultAccounts() {
  const vaults = await fireblocks.vaults.getPagedVaultAccounts();
  return vaults;
}