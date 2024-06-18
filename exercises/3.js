// https://tech-docs.corndel.com/js/nested-loops.html

/**
 * Given a grid of numbers (an array of arrays),
 * count how many are larger than 10.
 *
 * @example
 * // returns 4
 * gridLimit([
 *  [3, 12, 1],
 *  [19, 10, 11],
 *  [9, 5, 105]
 * ])
 *
 * @param {number[][]} grid - an array of arrays of numbers
 * @returns {number} The count of numbers larger than 10
 */
export function gridLimit(grid) {
  let count = 0

  for (let gridArray = 0; gridArray < grid.length; gridArray++) {
    // inner loop
    for (let indx = 0; indx < grid[gridArray].length; indx++) {
      // console.log(grid[gridArray][indx])
      if (grid[gridArray][indx] > 10) {
        count += 1
      }
    }

  }

  return count
}
