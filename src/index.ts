import { ServerInsurancePolicies } from './server';

async function main() {
  await new ServerInsurancePolicies().listen();
}

main();
