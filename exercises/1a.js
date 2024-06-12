// https://tech-docs.corndel.com/js/while-loops.html
// https://tech-docs.corndel.com/js/for-loops.html

/**
 * Adds together all the positive even numbers smaller than or equal to n
 *
 * @example
 * // returns 20 (= 2 + 4 + 6 + 8)
 * addEven(8)
 *
 * @param {number} n - The upper limit
 * @returns {number} The sum of the even numbers smaller than or equal to n
 */
export function addEven(n) {
  // TODO
  // let indx = 1
  let total = 0

  for (let indx = 0; indx <= n; indx += 2) {
    total += indx
  }

  // while (indx <= n) {
  //   indx++
  //  if (indx % 2 == 0) {
  //    total += indx
  //  }
  //}
  
  return total
}

const whatis = addEven(11)
console.log(whatis)
