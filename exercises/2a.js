// https://tech-docs.corndel.com/js/loop-control-flow.html

/**
 * Calculates the sum of numbers in an array that are either even or greater than 10,
 * but skips numbers that are both.
 *
 * @example
 * // returns 37
 * sumSelective([1, 4, 12, 15, 20, 5, 8, 10])
 *
 * @param {number[]} numbers - An array of numbers to be processed.
 * @returns {number} The sum of numbers that meet the criteria.
 */
export function sumSelective(numbers) {
  let total = 0

  for (let indx = 0; indx < numbers.length; indx++) {
    
    if (
      (numbers[indx] % 2 === 0 || numbers[indx] > 10) &&
      !(numbers[indx] % 2 === 0 && numbers[indx] > 10)
    ) {
      total += numbers[indx]
    }
    
    //if (numbers[indx] % 2 === 0 && numbers[indx] > 10) {
      // console.log(`Not adding ${numbers[indx]} at index=${indx}`)
    //  continue
    //} else if (numbers[indx] % 2 === 0 || numbers[indx] > 10) {
    //  total += numbers[indx]
      // console.log(`Adding ${numbers[indx]} at index=${indx}`)
    //} else {
      // console.log(`Not even or greater than 10: ${numbers[indx]}`)
    //  continue
    //}
  
  }

  return total
}
