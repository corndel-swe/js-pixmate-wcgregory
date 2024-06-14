// chalk allows us to change output color :)
import chalk from 'chalk'

/**
 * Create a checkerboard function that accept a size parameter
 * Draw a checkerboard shape to the console based on size
 */

export function checkerBoard(size) {
  // use size to build the side triangle
  let line = ''
  for (let row = 1; row <= size; row++) {
    if (row % 2 !== 0) {
      line = chalk.red('* ').repeat(size)
    } else {
      line = chalk.red(' *').repeat(size - 1)
    }
    console.log(line)
  }
}

checkerBoard(8)
