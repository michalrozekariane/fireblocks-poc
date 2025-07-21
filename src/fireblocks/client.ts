import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import { readFileSync } from 'fs';
import 'dotenv/config';

export const config = {
  FIREBLOCKS_API_KEY: process.env.FIREBLOCKS_API_KEY as string,
  FIREBLOCKS_PRIVATE_KEY_PATH: './fireblocks_secret2.key',
};

const apiKey = config.FIREBLOCKS_API_KEY;
const privateKey = readFileSync(config.FIREBLOCKS_PRIVATE_KEY_PATH, 'utf8');

export const fireblocks = new Fireblocks({
  apiKey,
  secretKey: privateKey,
  basePath: BasePath.Sandbox,
});
