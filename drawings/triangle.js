/**
 * Create a function that accepts width and height parameters
 * Draw the shape to console
 *
 * 
 */
export function triangle(size) {
  // use size to build the triangle
  for (let row = 0; row < size; row++) {
    let line = ' '.repeat(size - row) + '#' + '#'.repeat(row * 2)
    console.log(line)
  }
}

triangle(5)
