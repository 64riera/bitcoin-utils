import { commandOptions } from './config/index.js'
import { getRecommendedFees } from './lib/fees.js'
import { getAddressInformation } from './lib/adresses.js'
import { getTransactionInformation } from './lib/transactions.js'

export async function init() {
  const {fees, addressId, txId} = commandOptions

  // Get transaction recommended fees
  if (fees) {
    await getRecommendedFees()
  }

  // Get address information
  if (addressId) {
    await getAddressInformation(addressId)
  }

  // Get transaction information
  if (txId) {
    await getTransactionInformation(txId)
  }

}