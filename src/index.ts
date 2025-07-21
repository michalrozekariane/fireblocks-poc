import 'dotenv/config';
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from "@fireblocks/ts-sdk";

const FIREBLOCKS_API_SECRET_PATH = "./fireblocks_secret.key";

const main = () => {
  const fireblocks = new Fireblocks({
    apiKey: process.env.FIREBLOCKS_API_KEY,
    basePath: BasePath.Sandbox,
    secretKey: readFileSync(FIREBLOCKS_API_SECRET_PATH, "utf8"),
  });
  console.log('fireblocks:', fireblocks)
}

main()