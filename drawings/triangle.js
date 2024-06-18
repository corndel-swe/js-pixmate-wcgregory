// chalk allows us to change output color :)
import chalk from 'chalk'

/**
 * Create a series of functions that accept a size parameter
 * Draw the triangular shape to console based on size
 */

export function equilateralTriangle(size) {
  // use size to build the equilateral triangle
  for (let row = 0; row < size; row++) {
    let line = ' '.repeat(size - row) + '#' + '#'.repeat(row * 2)
    console.log(line)
  }
}

export function sideTriangle(size) {
  // use size to build the side triangle
  for (let row = 1; row <= size; row++) {
    let line = chalk.red('*').repeat(row)
    console.log(line)
  }
}

export function invertedSideTriangle(size) {
  // use size to build the inverted side triangle
  for (let row = 0; row <= size; row++) {
    let line = chalk.red('*').repeat(size - row)
    console.log(line)
  }
}

export function triangleSandwich(size) {
  // use size to build the side equilateral triangle
  for (let row = 0; row <= size; row++) {
    let line = chalk.red('*').repeat(row)
    console.log(line)
  }
  for (let row = 1; row <= size; row++) {
    let line = chalk.red('*').repeat(size - row)
    console.log(line)
  }
}

// equilateralTriangle(5)
// sideTriangle(5)
// invertedSideTriangle(5)
triangleSandwich(5)
