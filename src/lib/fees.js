import { bitcoin } from '../config/index.js'
import {print, loader} from "./utils.js";

/**
 * Returns recommended fees to broadcast a transaction
 * 
 * @returns {Promise<void>}
 */
export async function getRecommendedFees() {
  loader.start()
  let data
  try {
    data = await bitcoin.fees.getFeesRecommended()
    loader.succeed()
  } catch (err) {
    data = err.response?.data ?? err.message
    loader.fail()
  }
  print(data)
}