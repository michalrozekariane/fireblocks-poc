import '@nomicfoundation/hardhat-ethers';
import "@nomicfoundation/hardhat-toolbox";
import '@fireblocks/hardhat-fireblocks';

import { ApiBaseUrl } from '@fireblocks/fireblocks-web3-provider';
import { HardhatUserConfig } from 'hardhat/types';
import { fireblocksApiKey, fireblocksKeyPath, hederaAssetID, hederaRPC, vaultAccountIds } from './src/constants';

if (!fireblocksApiKey || !fireblocksKeyPath || !hederaRPC || vaultAccountIds.length === 0) {
  throw Error('You need to pass env variables')
}

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    hedera: {
      url: hederaRPC,
      chainId: 296,
      fireblocks: {
        apiBaseUrl: ApiBaseUrl.Sandbox,
        privateKey: fireblocksKeyPath,
        apiKey: fireblocksApiKey,
        vaultAccountIds,
        assetId: hederaAssetID,
      },
    },
    sepolia: {
      url: 'https://ethereum-sepolia.rpc.subquery.network/public',
      chainId: 11155111,
      fireblocks: {
        apiBaseUrl: ApiBaseUrl.Sandbox,
        privateKey: fireblocksKeyPath,
        apiKey: fireblocksApiKey,
        vaultAccountIds: ['5'], // id for test sepolia acc
        assetId: 'ETH_TEST5',
      },
    },
  },
};

export default config;