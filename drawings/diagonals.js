// chalk allows us to change output color :)
import chalk from 'chalk'

/**
 * Create a series of functions that accept a size parameter
 * Draw a diagonal shape to console based on size
 */

export function diagonal(size) {
  // use size to build the side triangle
  for (let row = 1; row <= size; row++) {
    // let line = ' '.repeat(row) + chalk.red('*').repeat(row)
    let line = ' '.repeat(row) + chalk.red('*')
    console.log(line)
  }
}

export function inverseDiagonal(size) {
    // use size to build the side triangle
    let decrement = size
    for (let row = 1; row <= size; row++) {
      let line = ' '.repeat(decrement) + chalk.red('*')
      decrement--
      console.log(line)
    }
  }

// diagonal(5)
inverseDiagonal(5)
