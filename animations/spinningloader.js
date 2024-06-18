import animate from './animate.js'
import chalk from 'chalk'

function spinningLoader(length) {
  const size = length
  const frames = Array()
  // Spinning loader pattern `-`, `\`, `|`, `/` with changing colour
  const pattern = [
    chalk.white('-'),
    chalk.green('\\'),
    chalk.red('|'),
    chalk.yellow('/')
  ]
  // pattern index counter
  let patternId = 0

  for (let indx = 1; indx <= length; indx++) {
    let percentage = ((indx / length) * 100).toFixed(0)
    let line = ''
    // used to control the pattern displayed on animate
    if (patternId % 4 === 0) {
      patternId = 0
    }
    line = pattern[patternId]
    line += '  percentage complete: ' + chalk.green(percentage) + chalk.green('%')
    // increment the pattern index counter
    patternId++
    // create the frame array based on line pattern
    frames.push(line)
  }
  animate(frames, 0.5)
}

spinningLoader(15)
