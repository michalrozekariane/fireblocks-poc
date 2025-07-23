import { v4 as uuidv4 } from 'uuid';
import { fireblocksSDK } from './client';
import { ContractTemplatesApiDeployContractRequest, CreateTokenRequestDto } from '@fireblocks/ts-sdk';

const contractTemplateId = '41c76f08-3144-4641-96c9-260c8fe846a7';

export const deployERC20F = async () => {
  const template = await fireblocksSDK.contractTemplates.getContractTemplateById({ contractTemplateId: '00000000-0000-0000-0000-000000000003' });

  const implementationContractID = template.data.implementationContractId || ''

  const contractDetails = await fireblocksSDK.deployedContracts.getDeployedContracts({
    baseAssetId: 'ETH_TEST5',
    contractTemplateId: implementationContractID
  })
  console.log('🚀contractDetails:', contractDetails.data)

  const implementationContractAddress = contractDetails.data.data[0].contractAddress

  const name = 'MyToken';
  const symbol = 'MTK';
  const defaultAdminAddress = '0x29874c475e026Ee6D653859ED51666669F863614';
  const minterAddress = '0xb9F01D9eb045b6E0a3142d773389959464f8a48C';
  const pauserAddress = '0x6F3c9810e1f0BD397eef9A6bB8D3137452741DEf';


  let deployRequest: CreateTokenRequestDto = {
    assetId: 'ETH_TEST5', // Fireblocks asset ID for Sepolia network
    vaultAccountId: '6',  // The vault account ID to manage the token
    createParams: {
      contractId: implementationContractID, // The ERC20F contract template ID
      deployFunctionParams: [
        {
          name: 'implementation',
          type: 'address',
          internalType: 'address',
          value: implementationContractAddress, // Address of the implementation contract retrieved in Step 3
        },
        {
          "name": "_data",
          "type": "bytes",
          "functionValue": {
            "name": "initialize",
            "inputs": [
              {
                "name": "_name",
                "type": "string",
                "internalType": "string",
                "value": name // _name (e.g., 'MyToken')
              },
              {
                "name": "_symbol",
                "type": "string",
                "internalType": "string",
                "value": symbol // _symbol (e.g., 'MTK')
              },
              {
                "name": "defaultAdmin",
                "type": "address",
                "internalType": "address",
                "value": defaultAdminAddress // Address with DEFAULT_ADMIN_ROLE
              },
              {
                "name": "minter",
                "type": "address",
                "internalType": "address",
                "value": minterAddress // Address with MINTER_ROLE
              },
              {
                "name": "pauser",
                "type": "address",
                "internalType": "address",
                "value": pauserAddress // Address with PAUSER_ROLE
              }
            ],
          }
        }
      ],
    },
  };

  // Issue the token
  const response = await fireblocksSDK.tokenization.issueNewToken({ createTokenRequestDto: deployRequest });
  console.log('New token issued:', response);
}