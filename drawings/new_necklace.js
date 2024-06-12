// chalk allows us to change output color :)
import chalk from 'chalk'

// start with an empty line
let line = ''

// use a loop to add stuff to the line
for (let i = 0; i < 10; i++) {
  // some conditionals to produce a pattern
  if (i % 2 == 0) {
    line += chalk.green('$')
  } else {
    line += '-'.repeat(2)
  }
}

// one more 'green bead' on the end!
line += chalk.green('$')

console.log(line)
