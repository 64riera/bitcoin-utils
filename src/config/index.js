import mempoolJS from '@mempool/mempool.js'
import program from "commander";

export const bitcoinNetwork = 'bitcoin'
export const { bitcoin: { addresses, transactions }, bitcoin } = mempoolJS({
  hostname: 'mempool.space',
  network: bitcoinNetwork
})

program
  .version('1.0.0')
  .name('bitcoin-mempool')
  .option('-f, --fees', 'Get transaction recommended fees')
  .option('-a, --address-id <address>', 'Get address information')
  .option('-tx, --tx-id <transaction id>', 'Get transaction information')

program.parse(process.argv);
export const commandOptions = program.opts()