// https://tech-docs.corndel.com/js/loop-control-flow.html

/**
 * Finds the index of the first element in an array that is smaller than the element before it.
 *
 * @example
 * // returns 3
 * stepDown([10, 12, 15, 14, 16, 20])
 *
 * @example
 * // returns -1 (no element is smaller than its predecessor)
 * stepDown([5, 10, 15, 20])
 *
 * @param {number[]} numbers - An array of numbers to be examined.
 * @returns {number} The index of the first element that is smaller than its predecessor.
 *                   Returns -1 if no such element is found or if the array is empty.
 */
export function stepDown(numbers) {
  let lowerIndex = -1
  let lastNum = 0
  let currNum = Number()

  for (let indx = 0; indx < numbers.length; indx++) {
    
    if (lastNum === 0) {
      lastNum = numbers[indx]
      currNum = numbers[indx]
      console.log(`First value in array, setting both lastNum and currNum to ${numbers[indx]}`)
    } else {
      lastNum = numbers[indx - 1]
      currNum = numbers[indx]
      console.log(`Setting currNum to ${numbers[indx]}, lastNum is ${lastNum}`)

      if (lastNum > currNum) {
        lowerIndex = indx
        console.log(`Setting stepDown to index value ${indx}`)
        break
      } else {
        continue
      }

    }

  }

  if (lowerIndex === -1) {
    console.log(`No stepDown values found in array`)
  }

  return lowerIndex
}
