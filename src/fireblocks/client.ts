import 'dotenv/config';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import { fireblocksApiKey, fireblocksKeyPath } from '../constants';

export const fireblocksSDK = new Fireblocks({
  apiKey: fireblocksApiKey,
  secretKey: fireblocksKeyPath,
  basePath: BasePath.Sandbox,
});
