import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

export const fireblocksApiKey = process.env.FIREBLOCKS_API_KEY as string;
export const fireblocksKeyPath = fs.readFileSync(process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH!, 'utf8');

export const vaultAdminID = process.env.VAULT_ADMIN_ID as string;
export const vaultIssuerID = process.env.VAULT_ISSUER_ID as string;
export const vaultInvestorID = process.env.VAULT_INVESTOR_ID as string;
export const vaultAccountIds = [vaultAdminID, vaultIssuerID, vaultInvestorID];

export const hederaRPC = process.env.HEDERA_RPC_URL as string;
export const hederaAssetID = 'HBAR_TEST'