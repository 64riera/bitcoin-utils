import util from "util";

/**
 * Prints the given information
 * 
 * @param data
 */
export const print = data => 
  console.log(util.inspect(data, false, null, true /* enable colors */))
