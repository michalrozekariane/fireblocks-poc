import { trexTokenAddress } from '../constants';
import { fireblocksSDK } from './client';


export const registerToken = async () => {
  try {
    const addTokenRes = await fireblocksSDK.blockchainsAssets.registerNewAsset({
      registerNewAssetRequest: {
        blockchainId: "HBAR_TEST2",
        address: trexTokenAddress,
      }
    });

    console.log("Token registered!");
    console.log(JSON.stringify(addTokenRes, null, 2));
  } catch (err) {
    console.error("Error during registering token:", err);
  }
}


