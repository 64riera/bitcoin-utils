import {transactions} from "../config/index.js";
import {print} from "./utils.js";

/**
 * Returns information from given transaction id
 * 
 * @param {string} txId
 */
export async function getTransactionInformation(txId) {
  let data
  try {
    data = await transactions.getTx({ txid: txId })
  } catch (err) {
    data = err.response.data
  }
  print(data)
}