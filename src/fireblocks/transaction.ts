import { TransferPeerPathType } from '@fireblocks/ts-sdk';
import { fireblocksSDK } from './client';

export const createTransaction = async (assetId: string, amount: string, srcId: string, destId: string) => {
  // example transaction to check if this is working
  const payload = {
    assetId,
    amount,
    source: {
      type: TransferPeerPathType.VaultAccount,
      id: String(srcId)
    },
    destination: {
      type: TransferPeerPathType.VaultAccount,
      id: String(destId)
    },
    note: "Your first transaction!",

  };

  try {
    const transactionResponse = await fireblocksSDK.transactions.createTransaction(
      {
        transactionRequest: payload,
      },
    );
    console.log(JSON.stringify(transactionResponse.data, null, 2));
    return transactionResponse.data;
  } catch (error) {
    console.error(error);
  }
};
