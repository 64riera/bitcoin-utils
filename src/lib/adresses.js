import {addresses} from "../config/index.js";
import {cleanTxInformation, loader, print} from "./utils.js";


/**
 * Returns address information
 *
 * @param {string} addressId
 */
export async function getAddressInformation(addressId) {
  loader.start()
  let data
  try {
    data = await addresses.getAddress({address: addressId})
    data.transactions = (await addresses.getAddressTxs({address: addressId})).map((transaction) => {
      return cleanTxInformation(transaction)
    })
    loader.succeed()
  } catch (err) {
    data = err.response.data
    loader.fail()
  }
  print(data)
}