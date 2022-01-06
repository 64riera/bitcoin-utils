import loading from "loading-cli";
import util from "util";
import chalk from "chalk";
import boxen from "boxen";
import {bitcoinNetwork} from "../config/index.js";

/**
 * Prints the given information
 *
 * @param data
 */
export function print(data) {
  const processedData = chalk.whiteBright.bold(util.inspect(data, false, null, true));
  const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "#f2a900",
    backgroundColor: "#222222",
    title: `Bitcoin utils - Network: ${bitcoinNetwork}`,
    titleAlignment: 'center'
  };
  const msgBox = boxen( processedData, boxenOptions );
  loader.clear()
  return console.log(msgBox)
}

/**
 * Cleans the transaction information for better visibility
 * 
 * @param {Tx} transaction
 */
export function cleanTxInformation(transaction) {
  let voutSum = 0
  transaction.vout.forEach((voutItem) => {
    voutSum += voutItem.value
  })
  delete transaction.vin
  delete transaction.vout
  transaction.total = [
    `${voutSum / 100000000} BTC`,
    `${voutSum} sats`,
  ]
  return transaction
}

/**
 * Graphical loader controller
 * 
 * @type {loading.Loading}
 */
export const loader = loading("Fetching data...")
