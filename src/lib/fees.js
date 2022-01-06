import { bitcoin } from '../config/index.js'
import { print } from "./utils.js";

/**
 * Returns recommended fees to broadcast a transaction
 * 
 * @returns {Promise<void>}
 */
export async function getRecommendedFees() {
  let data
  try {
    data = await bitcoin.fees.getFeesRecommended()
  } catch (err) {
    data = err.response.data
  }
  print(data)
}