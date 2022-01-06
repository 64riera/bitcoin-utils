import {addresses} from "../config/index.js";
import {print} from "./utils.js";


/**
 * Returns address information
 *
 * @param {string} addressId
 */
export async function getAddressInformation(addressId) {
  let data
  try {
    data = await addresses.getAddress({address: addressId})
    data.transactions = (await addresses.getAddressTxs({address: addressId})).map((transaction) => {
      delete transaction.vin
      delete transaction.vout
      return transaction
    })
  } catch (err) {
    data = err.response.data
  }
  print(data)
}