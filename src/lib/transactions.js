import {transactions} from "../config/index.js";
import {print, cleanTxInformation, loader} from "./utils.js";

/**
 * Returns information from given transaction id
 * 
 * @param {string} txId
 */
export async function getTransactionInformation(txId) {
  loader.start()
  let data
  try {
    const transaction = await transactions.getTx({ txid: txId })
    data = cleanTxInformation(transaction)
    loader.succeed()
  } catch (err) {
    data = err.response.data
    loader.fail()
  }
  print(data)
}