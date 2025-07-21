import { v4 as uuidv4 } from 'uuid';
import { fireblocks } from './client';
import { ContractTemplatesApiDeployContractRequest } from '@fireblocks/ts-sdk';

const contractTemplateId = '00000000-0000-0000-0000-000000000008';
// const contractTemplateId = '6faaf76f-0702-4732-9195-fdde5c61ccb3';

export const deployERC3643Contract = async () => {
  const constructor = await fireblocks.contractTemplates.getConstructorByContractTemplateId({ contractTemplateId });

  // console.log('constructor:', constructor)
  // console.log(JSON.stringify(constructor.data.inputs, null, 2));

  const tokenOwnerAddress = '0x000000000000000000000000000000000061a98d'
  const assetID = 'HBAR_TEST'
  const vaultAccountId = '6400397'

  // const customConfigProps = {
  //   _isMintable: true,
  //   _isBurnable: true,
  //   _isPausable: true,
  //   _isBlacklistEnabled: false,
  //   _isDocumentAllowed: false,
  //   _isWhitelistEnabled: true,
  //   _isMaxAmountOfTokensSet: true,
  //   _isForceTransferAllowed: false,
  //   _isTaxable: false,
  //   _isDeflationary: false
  // };

  // const constructorArgs = [
  //   "TestToken",           // name_
  //   "TTK",                 // symbol_
  //   "1000000000000000000", // initialSupplyToSet
  //   18,                    // decimalsToSet
  //   tokenOwnerAddress,     // tokenOwner
  //   customConfigProps,    // customConfigProps
  //   "1000000000000000000000", // maxTokenAmount
  //   "",                        // newDocumentUri
  //   "0x0000000000000000000000000000000000000000", // _taxAddress
  //   0,                        // _taxBPS
  //   0                         // _deflationBPS
  // ];

  const contractDeployRequest = {
    baseAssetId: assetID,
    assetId: assetID,
    vaultAccountId,
    constructorArgs: []
  };

  const body: ContractTemplatesApiDeployContractRequest = {
    contractTemplateId,
    contractDeployRequest,
    idempotencyKey: uuidv4(),
  };

  try {
    const result = await fireblocks.contractTemplates.deployContract(body);
    console.log('API called successfully. Returned data: ' + JSON.stringify(result, null, 2));
  } catch (err) {
    console.error(err)
  }
}