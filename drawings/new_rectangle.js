/**
 * Create a function that accepts width and height parameters
 * Draw the shape to console
 */
export function rectangle(width, height) {
  // make an outer loop for the rows
  for (let row = 0; row < height; row++) {
    // make a new empty line for each row
    let line = ''

    // now make an inner loop to add things to the line
    for (let col = 0; col < width; col++) {
      line += '#'
    }

    // each time the inner loop has finished, print the line
    console.log(line)
  }
}

rectangle(5, 8)
