// chalk allows us to change output color :)
import chalk from 'chalk'

/**
 * Create a checkerboard function that accepts a size parameter
 * Draw a checkerboard shape to the console based on size
 * @param length, the length of the board
 * @param defaultWidth boolean
 *  if true keeps the number of stars at 5 or 4
 *  if false is based on the length
 */

function checkerBoard(length, defaultWidth) {
  // length, is to build the length of the board
  // defaultWidth, true keeps the default number of stars, false is based on length
  let line = ''

  for (let row = 1; row <= length; row++) {
    if (row % 2 !== 0 && !defaultWidth) {
      line = chalk.red('* ').repeat(length - 1) + chalk.red('*')
    } else if (row % 2 !== 0 && defaultWidth) {
      line = chalk.red('* ').repeat(4) + chalk.red('*')
    } else if (row % 2 === 0 && !defaultWidth) {
      line = chalk.red(' *').repeat(length - 1)
    } else line = chalk.red(' *').repeat(4)
    console.log(line)
  }
}

// checkerBoard(6)
checkerBoard(6, true)
// checkerBoard(6, false)
