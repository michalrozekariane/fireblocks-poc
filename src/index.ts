import { deployERC3643Contract } from './fireblocks/contract-deploy';

async function main() {
  await deployERC3643Contract()
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});