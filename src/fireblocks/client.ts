import 'dotenv/config';
import * as ethers from "ethers"
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import { ApiBaseUrl, ChainId, FireblocksWeb3Provider } from '@fireblocks/fireblocks-web3-provider';
import { fireblocksApiKey, fireblocksKeyPath } from '../constants';



export const fireblocks = new Fireblocks({
  apiKey: fireblocksApiKey,
  secretKey: fireblocksKeyPath,
  basePath: BasePath.Sandbox,
});

// const eip1193Provider = new FireblocksWeb3Provider({
//   apiBaseUrl: ApiBaseUrl.Sandbox, // If using a sandbox workspace
//   privateKey: process.env.FIREBLOCKS_API_PRIVATE_KEY_PATH!,
//   apiKey: process.env.FIREBLOCKS_API_KEY!,
//   vaultAccountIds: process.env.FIREBLOCKS_VAULT_ACCOUNT_IDS,
//   // chainId: ChainId.SEPOLIA - no ChainId.HEDERA
// })

// export const provider = new ethers.providers.Web3Provider(eip1193Provider);
